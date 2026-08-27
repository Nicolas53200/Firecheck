/* ============================================================
   FireCheck — Couche Supabase
   ============================================================ */

const SUPABASE_URL = "https://xdbayclfpfehcvcgtokt.supabase.co";
const SUPABASE_KEY = "sb_publishable_2mhygVWhrzORbmPRf7ZlEQ_JrkNO-s4";

// Client Supabase (chargé via CDN dans index.html)
let sb = null;

function initSupabase(){
  const createClient = window.supabaseCreateClient || (window.supabase && window.supabase.createClient);
  if(typeof createClient === "undefined"){
    console.warn("Supabase SDK non chargé — mode localStorage uniquement");
    showSupabaseStatus(false);
    return;
  }
  sb = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log("✅ Supabase connecté");
  showSupabaseStatus(true);
  syncAll();

  // Patch pharmSave pour sauvegarder sur Supabase
  if(typeof window.pharmSave === "function"){
    const _origPharmSave = window.pharmSave;
    window.pharmSave = function(){
      _origPharmSave();
      savePharmacieSupabase();
    };
    console.log("✅ pharmSave patché");
  }
}

/* ============================================================
   STORAGE PHOTOS
   ============================================================ */

const BUCKET = "firecheck-photos";

async function uploadPhoto(path, dataUrl){
  if(!sb) return null;
  try{
    // Convertir base64 en Blob
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const ext = blob.type.includes("png") ? "png" : "jpg";
    const fullPath = `${path}.${ext}`;

    const { error } = await sb.storage.from(BUCKET).upload(fullPath, blob, {
      upsert: true,
      contentType: blob.type
    });
    if(error){ console.error("Upload error:", error); return null; }

    const { data } = sb.storage.from(BUCKET).getPublicUrl(fullPath);
    return data.publicUrl;
  }catch(e){
    console.error("uploadPhoto:", e);
    return null;
  }
}

async function getPhotoUrl(path){
  if(!sb) return null;
  try{
    const { data } = sb.storage.from(BUCKET).getPublicUrl(`${path}.jpg`);
    return data.publicUrl;
  }catch(e){ return null; }
}

/* ============================================================
   TABLES — initialisation automatique
   ============================================================ */

/* V38 — exec_sql supprimé (vulnérabilité : exécution SQL arbitraire depuis le client).
   Les tables doivent être créées via le dashboard Supabase ou Supabase CLI.
   ensureTables() vérifie simplement que les tables sont accessibles. */
async function ensureTables(){
  if(!sb) return;
  const requiredTables = [
    "fc_inventaire", "fc_vehicles", "fc_remontees",
    "fc_pharmacie", "fc_personnel", "fc_medias"
  ];
  for(const table of requiredTables){
    try{
      await sb.from(table).select("id").limit(1);
    }catch(e){
      console.warn(`Table ${table} inaccessible — crée-la via le dashboard Supabase.`);
    }
  }
}

/* ============================================================
   SYNC — Photos de médias inventaire
   ============================================================ */

// Remplace setMediaV30 pour uploader sur Supabase
const _origSetMedia = typeof setMediaV30 === "function" ? setMediaV30 : null;

let fcMediaUrls = {}; // { "vehicleId__slot": url }

async function syncMedias(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_medias").select("*");
    if(error) throw error;
    fcMediaUrls = {};
    (data || []).forEach(row => {
      fcMediaUrls[`${row.vehicle_id}__${row.slot}`] = row.photo_url;
    });
    if(typeof renderCheckSheets === "function") renderCheckSheets();
  }catch(e){ console.warn("syncMedias:", e); }
}

async function setMediaSupabase(vehicleId, slot, dataUrl){
  // 1. Sauvegarder localement d'abord (fallback immédiat)
  if(_origSetMedia) _origSetMedia(vehicleId, slot, dataUrl);

  // 2. Uploader sur Supabase si connecté
  if(!sb || !dataUrl) return;
  try{
    const path = `medias/${vehicleId}/${slot.replace(/[^a-zA-Z0-9_-]/g,"_")}`;
    const url = await uploadPhoto(path, dataUrl);
    if(url){
      // Enregistrer l'URL dans la table fc_medias
      await sb.from("fc_medias").upsert({
        id: `${vehicleId}__${slot}`,
        vehicle_id: vehicleId,
        slot: slot,
        photo_url: url,
        updated_at: new Date().toISOString()
      });
      console.log(`📸 Photo uploadée : ${url}`);
      // Mettre à jour le cache local immédiatement (sans attendre le prochain sync)
      if(typeof fcMediaUrls !== "undefined") fcMediaUrls[`${vehicleId}__${slot}`] = url;
    }
  }catch(e){ console.warn("setMediaSupabase:", e); }
}

/* ============================================================
   SYNC — Pharmacie
   ============================================================ */

async function syncPharmacie(){
  if(!sb) return;
  try{
    // Charger depuis Supabase
    const { data, error } = await sb.from("fc_pharmacie").select("*").order("expiry");
    if(error) throw error;
    if(data && data.length > 0){
      // Convertir format Supabase → format local
      const local = data.map(r => ({
        name: r.name,
        engin: r.engin,
        expiry: r.expiry,
        photo: r.photo_url || ""
      }));
      pharmData.length = 0;
      pharmData.push(...local);
      pharmSave(); // Sync vers localStorage aussi
      if(document.getElementById("pharmList")) pharmRender();
    }
  }catch(e){ console.warn("syncPharmacie:", e); }
}

async function savePharmacieSupabase(){
  if(!sb) return;
  try{
    // Uploader les photos d'abord
    const rows = await Promise.all(pharmData.map(async (p, i) => {
      let photoUrl = p.photo || "";
      if(photoUrl && photoUrl.startsWith("data:")){
        const path = `pharmacie/${p.engin.replace(/\s/g,"_")}_${i}`;
        const url = await uploadPhoto(path, photoUrl);
        if(url) photoUrl = url;
      }
      return {
        id: `${p.engin}_${p.name}`.replace(/[^a-zA-Z0-9_]/g,"_").toLowerCase(),
        name: p.name,
        engin: p.engin,
        expiry: p.expiry,
        photo_url: photoUrl
      };
    }));

    // Remplacer tout
    await sb.from("fc_pharmacie").delete().neq("id", "__none__");
    if(rows.length) await sb.from("fc_pharmacie").insert(rows);
    console.log("✅ Pharmacie sauvegardée sur Supabase");
  }catch(e){ console.warn("savePharmacieSupabase:", e); }
}

/* ============================================================
   SYNC — Personnel
   ============================================================ */

async function syncPersonnel(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_personnel").select("*");
    if(error) throw error;
    if(data && data.length > 0){
      const local = data.map(r => ({
        matricule: r.matricule,
        grade: r.grade,
        nom: r.nom,
        prenom: r.prenom,
        type: r.type || "",
        equipe: r.equipe || "",
        stAccess: r.acces_st || false
      }));
      personnelList.length = 0;
      personnelList.push(...local);
      localStorage.setItem("fc_personnel", JSON.stringify(personnelList));
    }
  }catch(e){ console.warn("syncPersonnel:", e); }
}

async function savePersonnelSupabase(){
  if(!sb || !personnelList.length) return;
  try{
    const rows = personnelList.map(p => ({
      matricule: String(p.matricule),
      grade: p.grade || "",
      nom: p.nom || "",
      prenom: p.prenom || "",
      type: p.type || "",
      equipe: p.equipe || "",
      acces_st: p.stAccess || false
    }));
    await sb.from("fc_personnel").upsert(rows, { onConflict: "matricule" });
    console.log("✅ Personnel sauvegardé");
  }catch(e){ console.warn("savePersonnelSupabase:", e); }
}

/* ============================================================
   SYNC — Remontées
   ============================================================ */

/* ============================================================
   SYNC — Fiches de passation entre relèves (par véhicule)
   ============================================================ */

async function syncHandovers(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_handovers").select("*").order("created_at", {ascending: false});
    if(error) throw error;
    if(typeof fcHandovers !== "undefined"){
      fcHandovers.length = 0;
      (data || []).forEach(h => {
        fcHandovers.push({
          id: h.id,
          vehicleId: h.vehicle_id,
          vehicleName: h.vehicle_name,
          comment: h.comment,
          priority: h.priority,
          author: h.author,
          time: h.time,
          read: !!h.read
        });
      });
    }
  }catch(e){ console.warn("syncHandovers:", e); }
}

async function saveHandoverSupabase(handover){
  if(!sb || !handover) return;
  try{
    const payload = {
      id: handover.id,
      vehicle_id: handover.vehicleId,
      vehicle_name: handover.vehicleName,
      comment: handover.comment,
      priority: handover.priority,
      author: handover.author,
      time: handover.time,
      read: handover.read || false
    };
    const { error } = await sb.from("fc_handovers").upsert(payload);
    if(error){
      console.warn("saveHandoverSupabase erreur:", error.message);
      if(typeof toast === "function") toast("⚠️ Fiche de passation non envoyée : " + error.message);
    } else {
      if(typeof fcHandovers !== "undefined") fcHandovers.push(handover);
      console.log("✅ Fiche de passation enregistrée:", handover.id);
    }
  }catch(e){ console.warn("saveHandoverSupabase:", e); }
}

async function markHandoverReadSupabase(id){
  if(!sb) return;
  try{
    await sb.from("fc_handovers").update({read: true}).eq("id", id);
    console.log("✅ Fiche de passation marquée comme lue:", id);
  }catch(e){ console.warn("markHandoverReadSupabase:", e); }
}

async function syncRemontees(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_remontees").select("*").order("created_at", {ascending: false});
    if(error) throw error;
    if(data && data.length > 0){
      const local = data.map(r => {
        let history = [];
        try{ history = r.history ? JSON.parse(r.history) : []; }catch(e){ history = []; }
        return {
          id: r.id,
          asset: r.asset,
          zone: r.zone,
          origin: r.origin,
          type: r.type,
          item: r.item,
          comment: r.comment,
          status: r.status,
          priority: r.priority,
          author: r.author,
          time: r.time,
          history,
          takenBy: r.taken_by || "",
          takenDate: r.taken_date || ""
        };
      });
      reports.length = 0;
      reports.push(...local);
      if(typeof renderAll === "function") renderAll();
    }
  }catch(e){ console.warn("syncRemontees:", e); }
}

async function saveRemonteeSupabase(report){
  if(!sb || !report) return;
  try{
    const payload = {
      id: String(report.id),
      asset: report.asset || "",
      zone: report.zone || "",
      origin: report.origin || "",
      type: report.type || "",
      item: report.item || "",
      comment: report.comment || "",
      status: report.status || "Nouveau",
      priority: report.priority || "Normale",
      author: report.author || "",
      time: report.time || "",
      history: JSON.stringify(report.history || []),
      taken_by: report.takenBy || "",
      taken_date: report.takenDate || ""
    };
    let { error } = await sb.from("fc_remontees").upsert(payload);
    if(error){
      console.warn("saveRemonteeSupabase erreur:", error.message);
      const msg = String(error.message || "").toLowerCase();
      ["history","taken_by","taken_date","priority","author","time","origin","item","asset"].forEach(col => {
        if(msg.includes(col) && col in payload) delete payload[col];
      });
      const retry = await sb.from("fc_remontees").upsert(payload);
      if(retry.error){
        console.warn("saveRemonteeSupabase erreur (retry):", retry.error.message);
        if(typeof toast === "function") toast("⚠️ Remontée non enregistrée : " + retry.error.message);
      } else {
        console.log("✅ Remontée enregistrée (colonnes manquantes ignorées — vérifie le schéma de fc_remontees)");
      }
    } else {
      console.log("✅ Remontée sauvegardée:", report.id);
    }
  }catch(e){ console.warn("saveRemonteeSupabase:", e); }
}

async function updateRemonteeStatusSupabase(id, status, extra){
  if(!sb) return;
  try{
    const payload = {status};
    if(extra && extra.history) payload.history = JSON.stringify(extra.history);
    if(extra && extra.takenBy) payload.taken_by = extra.takenBy;
    if(extra && extra.takenDate) payload.taken_date = extra.takenDate;
    let { error } = await sb.from("fc_remontees").update(payload).eq("id", String(id));
    if(error){
      console.warn("updateRemonteeStatusSupabase erreur:", error.message);
      // Réessaye avec uniquement le statut si les colonnes étendues n'existent pas
      const retry = await sb.from("fc_remontees").update({status}).eq("id", String(id));
      if(retry.error){
        console.warn("updateRemonteeStatusSupabase erreur (retry):", retry.error.message);
        if(typeof toast === "function") toast("⚠️ Statut non enregistré : " + retry.error.message);
      }
    } else {
      console.log("✅ Statut remontée mis à jour:", id, status);
    }
  }catch(e){ console.warn("updateRemonteeStatusSupabase:", e); }
}

/* ============================================================
   SYNC — Inventaires & Véhicules
   ============================================================ */

async function syncInventaires(){
  if(!sb) return;
  try{
    // Véhicules
    const { data: vData } = await sb.from("fc_vehicles").select("*");
    if(vData && vData.length > 0){
      // Fusionner avec les véhicules existants (ne pas écraser)
      vData.forEach(v => {
        if(!fcVehicles.find(x => x.id === v.id)){
          fcVehicles.push({id:v.id, name:v.name, plate:v.plate, type:v.type, category:v.category, status:v.status});
        }
      });
    }
    // Items inventaire — remplace entièrement le tableau
    const { data: iData } = await sb.from("fc_inventaire").select("*");
    if(iData){
      fcInventory.length = 0;
      iData.forEach(item => {
        fcInventory.push({id:item.id, vehicleId:item.vehicle_id, zone:item.zone, name:item.name, qty:item.qty, category:item.category, subLocation:item.sub_location || ""});
      });
      if(typeof renderCheckSheets === "function") renderCheckSheets();
    }
    console.log("✅ Inventaires synchronisés");
  }catch(e){ console.warn("syncInventaires:", e); }
}

async function deleteVehicleSupabase(vehicleId){
  if(!sb) return;
  try{
    await sb.from("fc_vehicles").delete().eq("id", vehicleId);
    await sb.from("fc_inventaire").delete().eq("vehicle_id", vehicleId);
    await sb.from("fc_layouts").delete().eq("vehicle_id", vehicleId);
    await sb.from("fc_medias").delete().eq("vehicle_id", vehicleId);
    console.log("🗑️ Inventaire supprimé sur Supabase:", vehicleId);
  }catch(e){ console.warn("deleteVehicleSupabase:", e); }
}

async function saveVehicleSupabase(vehicle){
  if(!sb || !vehicle) return;
  try{
    await sb.from("fc_vehicles").upsert({
      id: vehicle.id,
      name: vehicle.name || "",
      plate: vehicle.plate || "",
      type: vehicle.type || "",
      category: vehicle.category || "",
      status: vehicle.status || "Actif"
    });
  }catch(e){ console.warn("saveVehicleSupabase:", e); }
}

async function saveInventaireItemSupabase(item){
  if(!sb || !item) return;
  try{
    const payload = {
      id: item.id,
      vehicle_id: item.vehicleId,
      zone: item.zone || "",
      name: item.name || "",
      qty: item.qty || 1,
      category: item.category || "",
      sub_location: item.subLocation || ""
    };
    let { error } = await sb.from("fc_inventaire").upsert(payload);
    if(error){
      console.warn("saveInventaireItemSupabase erreur:", error.message);
      const msg = String(error.message || "").toLowerCase();
      // Réessayer en retirant les colonnes manquantes une à une
      if(msg.includes("category")) delete payload.category;
      if(msg.includes("sub_location")) delete payload.sub_location;
      if(!("category" in payload) || !("sub_location" in payload)){
        const retry = await sb.from("fc_inventaire").upsert(payload);
        if(retry.error) console.warn("saveInventaireItemSupabase erreur (retry):", retry.error.message);
        else console.log("✅ Item enregistré (colonnes manquantes ignorées — vérifie le schéma de fc_inventaire)");
      }
    }
  }catch(e){ console.warn("saveInventaireItemSupabase:", e); }
}

async function deleteInventaireItemSupabase(id){
  if(!sb) return;
  try{
    const { error } = await sb.from("fc_inventaire").delete().eq("id", id);
    if(error){
      console.warn("deleteInventaireItemSupabase erreur:", error.message);
      if(typeof toast === "function") toast("⚠️ Suppression non enregistrée : " + error.message);
    } else {
      console.log("✅ Matériel supprimé sur Supabase:", id);
    }
  }catch(e){
    console.warn("deleteInventaireItemSupabase:", e);
    if(typeof toast === "function") toast("⚠️ Erreur lors de la suppression du matériel");
  }
}

/* ============================================================
   SYNC — Layouts (zones, vues, photos de fond) par véhicule
   ============================================================ */

async function syncLayouts(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_layouts").select("*");
    if(error) throw error;
    (data || []).forEach(row => {
      if(row.layouts) fcLayouts[row.vehicle_id] = row.layouts;
      if(row.views) fcVehicleViews[row.vehicle_id] = row.views;
      if(row.photos) fcPhotos[row.vehicle_id] = row.photos;
      if(row.subzones) fcSubZones[row.vehicle_id] = row.subzones;
    });
    if(typeof fcSaveVehicleViews === "function") fcSaveVehicleViews();
    if(typeof fcSaveSubZones === "function") fcSaveSubZones();
    if(typeof renderCheckSheets === "function") renderCheckSheets();
  }catch(e){ console.warn("syncLayouts:", e); }
}

async function saveLayoutSupabase(vehicleId){
  if(!sb) return;
  try{
    fcEnsureVehicle(vehicleId);
    const payload = {
      vehicle_id: vehicleId,
      layouts: fcLayouts[vehicleId] || {},
      views: fcGetViews(vehicleId),
      photos: fcPhotos[vehicleId] || {},
      subzones: fcSubZones[vehicleId] || {},
      updated_at: new Date().toISOString()
    };
    let { error } = await sb.from("fc_layouts").upsert(payload);
    if(error){
      console.warn("saveLayoutSupabase erreur:", error.message);
      const msg = String(error.message || "").toLowerCase();
      if(msg.includes("photos")) delete payload.photos;
      if(msg.includes("subzones")) delete payload.subzones;
      if(!("photos" in payload) || !("subzones" in payload)){
        const retry = await sb.from("fc_layouts").upsert(payload);
        if(retry.error){
          console.warn("saveLayoutSupabase erreur (retry):", retry.error.message);
          if(typeof toast === "function") toast("⚠️ Le plan n'a pas pu être enregistré : " + retry.error.message);
        } else {
          console.log("✅ Plan enregistré (colonnes manquantes ignorées — vérifie le schéma de fc_layouts)");
        }
      } else {
        if(typeof toast === "function") toast("⚠️ Le plan n'a pas pu être enregistré : " + error.message);
      }
    } else {
      console.log("✅ Plan enregistré sur Supabase:", vehicleId);
    }
  }catch(e){
    console.warn("saveLayoutSupabase:", e);
    if(typeof toast === "function") toast("⚠️ Erreur lors de l'enregistrement du plan");
  }
}

/* ============================================================
   SYNC — Véhicules et matériels techniques (entretien)
   ============================================================ */

async function syncAssets(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_assets").select("*");
    if(error) throw error;
    if(data && data.length > 0 && typeof vehicles !== "undefined" && typeof equipment !== "undefined"){
      const vehicleAssets = data.filter(a => a.mode === "vehicle").map(mapAssetFromSupabase);
      const equipmentAssets = data.filter(a => a.mode === "equipment").map(mapAssetFromSupabase);
      if(vehicleAssets.length) vehicles = vehicleAssets;
      if(equipmentAssets.length) equipment = equipmentAssets;
      if(typeof renderAll === "function") renderAll();
    }
  }catch(e){ console.warn("syncAssets:", e); }
}

function mapAssetFromSupabase(a){
  return {
    id: a.id,
    name: a.name,
    detail: a.detail,
    type: a.type,
    followType: a.follow_type,
    currentValue: a.current_value,
    unit: a.unit,
    lastServiceValue: a.last_service_value,
    intervalValue: a.interval_value,
    nextControlDate: a.next_control_date || "",
    ct: a.next_control_date || "—",
    notes: a.notes || "",
    lastReadingMonth: a.last_reading_month || ""
  };
}

async function saveAssetSupabase(asset, mode){
  if(!sb || !asset) return;
  try{
    const payload = {
      id: asset.id,
      mode: mode,
      name: asset.name,
      detail: asset.detail || "",
      type: asset.type || "",
      follow_type: asset.followType || "km",
      current_value: asset.currentValue || 0,
      unit: asset.unit || "",
      last_service_value: asset.lastServiceValue || 0,
      interval_value: asset.intervalValue || 0,
      next_control_date: asset.nextControlDate || "",
      notes: asset.notes || "",
      last_reading_month: asset.lastReadingMonth || ""
    };
    let { error } = await sb.from("fc_assets").upsert(payload);
    if(error){
      console.warn("saveAssetSupabase erreur:", error.message);
      const msg = String(error.message || "").toLowerCase();
      if(msg.includes("last_reading_month")) delete payload.last_reading_month;
      const retry = await sb.from("fc_assets").upsert(payload);
      if(retry.error){
        console.warn("saveAssetSupabase erreur (retry):", retry.error.message);
        if(typeof toast === "function") toast("⚠️ Élément non enregistré : " + retry.error.message);
      } else {
        console.log("✅ Véhicule/matériel enregistré (colonne manquante ignorée):", asset.id);
      }
    } else {
      console.log("✅ Véhicule/matériel enregistré:", asset.id);
    }
  }catch(e){ console.warn("saveAssetSupabase:", e); }
}

async function deleteAssetSupabase(id){
  if(!sb) return;
  try{
    const { error } = await sb.from("fc_assets").delete().eq("id", id);
    if(error){
      console.warn("deleteAssetSupabase erreur:", error.message);
      if(typeof toast === "function") toast("⚠️ Suppression non enregistrée : " + error.message);
    } else {
      console.log("✅ Véhicule/matériel supprimé:", id);
    }
  }catch(e){ console.warn("deleteAssetSupabase:", e); }
}

/* ============================================================
   SYNC — Bibliothèque matériel personnalisée
   ============================================================ */

async function syncLibraryCustom(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_library").select("*");
    if(error) throw error;
    if(data && data.length > 0 && typeof FC_LIBRARY !== "undefined"){
      data.forEach(item => {
        if(!FC_LIBRARY.find(i => i.id === item.id)){
          FC_LIBRARY.push({id:item.id, name:item.name, family:item.family, sub:item.sub, qty:item.qty, custom:true});
        }
      });
      if(typeof renderFcLibrary === "function") renderFcLibrary();
    }
    console.log("✅ Bibliothèque personnalisée synchronisée");
  }catch(e){ console.warn("syncLibraryCustom:", e); }
}

async function saveLibraryItemSupabase(item){
  if(!sb || !item) return;
  try{
    const payload = {
      id: item.id || ("lib-" + Date.now()),
      name: item.name,
      family: item.family,
      sub: item.sub || "",
      qty: item.qty || 1
    };
    if(!item.id) item.id = payload.id;
    const { error } = await sb.from("fc_library").upsert(payload);
    if(error){
      console.warn("saveLibraryItemSupabase erreur:", error.message);
      if(typeof toast === "function") toast("⚠️ Article non sauvegardé : " + error.message);
    } else {
      console.log("✅ Article bibliothèque sauvegardé:", item.name);
    }
  }catch(e){ console.warn("saveLibraryItemSupabase:", e); }
}

async function deleteLibraryItemSupabase(id){
  if(!sb || !id) return;
  try{
    const { error } = await sb.from("fc_library").delete().eq("id", id);
    if(error) console.warn("deleteLibraryItemSupabase:", error.message);
    else console.log("✅ Article bibliothèque supprimé:", id);
  }catch(e){ console.warn("deleteLibraryItemSupabase:", e); }
}

/* ============================================================
   SYNC GLOBAL — appelé au démarrage
   ============================================================ */

async function syncAll(){
  if(!sb) return;
  await syncPharmacie();
  await syncPersonnel();
  await syncRemontees();
  await syncHandovers();
  await syncInventaires();
  await syncMedias();
  await syncLayouts();
  await syncAssets();
  await syncLibraryCustom();

  // Vérifier que l'utilisateur connecté existe toujours dans le personnel
  const storedUser = JSON.parse(localStorage.getItem("fc_current_user") || "null");
  if(storedUser && personnelList.length > 0){
    const stillExists = personnelList.some(p =>
      String(p.matricule).toUpperCase() === String(storedUser.matricule || "").toUpperCase()
    );
    if(!stillExists){
      localStorage.removeItem("fc_current_user");
      if(typeof renderAll === "function") renderAll();
      console.log("⚠️ Utilisateur inconnu déconnecté");
    }
  }

  console.log("🔄 Sync Supabase terminée");
}

/* ============================================================
   HOOKS — intercept les sauvegardes locales
   ============================================================ */

// Les patches sont appliqués après init (voir initSupabase)

/* ============================================================
   STATUT — indicateur visuel connexion
   ============================================================ */

function showSupabaseStatus(ok){
  const existing = document.getElementById("supabaseStatus");
  if(existing) existing.remove();
  const el = document.createElement("div");
  el.id = "supabaseStatus";
  el.style.cssText = `
    position:fixed;bottom:16px;left:16px;z-index:9999;
    background:${ok ? "#065f46" : "#7f1d1d"};color:white;
    padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700;
    box-shadow:0 2px 8px rgba(0,0,0,.2);pointer-events:none;
    opacity:1;transition:opacity 1s;
  `;
  el.textContent = ok ? "☁️ Supabase connecté" : "⚠️ Mode local (hors-ligne)";
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 1000); }, 3000);
}

/* ============================================================
   DÉMARRAGE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Attendre que le module ESM soit chargé (léger délai)
  setTimeout(() => {
    const createClient = window.supabaseCreateClient || (window.supabase && window.supabase.createClient);
    if(typeof createClient !== "undefined"){
      initSupabase();
    } else {
      console.warn("Supabase SDK indisponible");
      showSupabaseStatus(false);
    }
  }, 500);
});
