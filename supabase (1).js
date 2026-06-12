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

async function ensureTables(){
  if(!sb) return;
  // On tente d'insérer dans chaque table — si elle n'existe pas, on la crée via SQL
  const tables = [
    `CREATE TABLE IF NOT EXISTS fc_inventaire (
      id TEXT PRIMARY KEY,
      vehicle_id TEXT,
      zone TEXT,
      name TEXT,
      qty INTEGER,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )`,
    `CREATE TABLE IF NOT EXISTS fc_vehicles (
      id TEXT PRIMARY KEY,
      name TEXT,
      plate TEXT,
      type TEXT,
      category TEXT,
      status TEXT DEFAULT 'Actif'
    )`,
    `CREATE TABLE IF NOT EXISTS fc_remontees (
      id TEXT PRIMARY KEY,
      vehicle TEXT,
      zone TEXT,
      type TEXT,
      note TEXT,
      status TEXT DEFAULT 'Nouveau',
      reporter TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )`,
    `CREATE TABLE IF NOT EXISTS fc_pharmacie (
      id TEXT PRIMARY KEY,
      name TEXT,
      engin TEXT,
      expiry TEXT,
      photo_url TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )`,
    `CREATE TABLE IF NOT EXISTS fc_personnel (
      matricule TEXT PRIMARY KEY,
      grade TEXT,
      nom TEXT,
      prenom TEXT,
      type TEXT,
      equipe TEXT,
      acces_st BOOLEAN DEFAULT FALSE
    )`,
    `CREATE TABLE IF NOT EXISTS fc_medias (
      id TEXT PRIMARY KEY,
      vehicle_id TEXT,
      slot TEXT,
      photo_url TEXT,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )`
  ];

  for(const sql of tables){
    const { error } = await sb.rpc("exec_sql", { query: sql }).catch(() => ({ error: "rpc not available" }));
    // Si rpc non dispo, on continue — les tables seront créées manuellement
    if(error && !String(error).includes("already exists")){
      // Silencieux — l'utilisateur créera les tables via le dashboard si besoin
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

async function syncRemontees(){
  if(!sb) return;
  try{
    const { data, error } = await sb.from("fc_remontees").select("*").order("created_at", {ascending: false});
    if(error) throw error;
    if(data && data.length > 0){
      const local = data.map(r => ({
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
        time: r.time
      }));
      reports.length = 0;
      reports.push(...local);
      if(typeof renderAll === "function") renderAll();
    }
  }catch(e){ console.warn("syncRemontees:", e); }
}

async function saveRemonteeSupabase(report){
  if(!sb || !report) return;
  try{
    await sb.from("fc_remontees").upsert({
      id: report.id,
      asset: report.asset || "",
      zone: report.zone || "",
      origin: report.origin || "",
      type: report.type || "",
      item: report.item || "",
      comment: report.comment || "",
      status: report.status || "Nouveau",
      priority: report.priority || "Normale",
      author: report.author || "",
      time: report.time || ""
    });
    console.log("✅ Remontée sauvegardée:", report.id);
  }catch(e){ console.warn("saveRemonteeSupabase:", e); }
}

async function updateRemonteeStatusSupabase(id, status){
  if(!sb) return;
  try{
    await sb.from("fc_remontees").update({status}).eq("id", String(id));
    console.log("✅ Statut remontée mis à jour:", id, status);
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
        fcInventory.push({id:item.id, vehicleId:item.vehicle_id, zone:item.zone, name:item.name, qty:item.qty, category:item.category});
      });
      if(typeof renderCheckSheets === "function") renderCheckSheets();
    }
    console.log("✅ Inventaires synchronisés");
  }catch(e){ console.warn("syncInventaires:", e); }
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
    await sb.from("fc_inventaire").upsert({
      id: item.id,
      vehicle_id: item.vehicleId,
      zone: item.zone || "",
      name: item.name || "",
      qty: item.qty || 1,
      category: item.category || ""
    });
  }catch(e){ console.warn("saveInventaireItemSupabase:", e); }
}

async function deleteInventaireItemSupabase(id){
  if(!sb) return;
  try{
    await sb.from("fc_inventaire").delete().eq("id", id);
  }catch(e){ console.warn("deleteInventaireItemSupabase:", e); }
}

/* ============================================================
   SYNC GLOBAL — appelé au démarrage
   ============================================================ */

async function syncAll(){
  if(!sb) return;
  await syncPharmacie();
  await syncPersonnel();
  await syncRemontees();
  await syncInventaires();
  await syncMedias();

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
