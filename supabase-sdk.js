/* Supabase Mini-Client — FireCheck (sans CDN externe) */
(function(global){

function createClient(url, key){
  const headers = {
    "apikey": key,
    "Authorization": "Bearer " + key,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };

  // Storage
  const storage = {
    from: function(bucket){
      return {
        upload: async function(path, blob, opts){
          try{
            const h = {...headers, "Content-Type": blob.type};
            delete h["Content-Type"]; // laisser le browser gérer multipart
            const r = await fetch(`${url}/storage/v1/object/${bucket}/${path}`, {
              method: opts && opts.upsert ? "PUT" : "POST",
              headers: {"apikey": key, "Authorization": "Bearer " + key, "x-upsert": opts && opts.upsert ? "true" : "false"},
              body: blob
            });
            if(!r.ok){ const e = await r.json(); return {error: e}; }
            return {data: await r.json(), error: null};
          }catch(e){ return {error: e}; }
        },
        getPublicUrl: function(path){
          return {data: {publicUrl: `${url}/storage/v1/object/public/${bucket}/${path}`}};
        }
      };
    }
  };

  // Database
  function from(table){
    let _filters = [];
    let _select = "*";
    let _order = null;
    let _method = "GET";
    let _body = null;
    let _prefer = "return=representation";

    const chain = {
      select: function(cols){ _select = cols || "*"; return chain; },
      order: function(col, opts){ _order = col + (opts && opts.ascending === false ? ".desc" : ".asc"); return chain; },
      eq: function(col, val){ _filters.push(`${col}=eq.${val}`); return execIfTerminal(); },
      neq: function(col, val){ _filters.push(`${col}=neq.${val}`); return execIfTerminal(); },
      insert: function(data){
        _method = "POST"; _body = data;
        return execIfTerminal();
      },
      upsert: function(data, opts){
        _method = "POST";
        _body = data;
        _prefer = "resolution=merge-duplicates,return=representation";
        return execIfTerminal();
      },
      update: function(data){
        _method = "PATCH"; _body = data;
        return execIfTerminal();
      },
      delete: function(){
        _method = "DELETE";
        return execIfTerminal();
      },
      then: function(resolve, reject){
        return exec().then(resolve, reject);
      }
    };

    // Pour insert/upsert (pas besoin de filtre), exécute directement mais reste chaînable
    // (eq/neq peuvent encore s'ajouter après pour update/delete). On expose un objet hybride :
    // à la fois "thenable" (awaitable directement) et muni de eq()/neq() pour pouvoir filtrer
    // avant la résolution de la promesse.
    function execIfTerminal(){
      return chain;
    }

    async function exec(){
      try{
        let endpoint = `${url}/rest/v1/${table}`;
        const params = [];
        if(_select && _method === "GET") params.push(`select=${encodeURIComponent(_select)}`);
        _filters.forEach(f => params.push(f));
        if(_order) params.push(`order=${_order}`);
        if(params.length) endpoint += "?" + params.join("&");

        const h = {...headers, "Prefer": _prefer};
        const opts = {method: _method, headers: h};
        if(_body) opts.body = JSON.stringify(_body);

        const r = await fetch(endpoint, opts);
        if(!r.ok){
          const e = await r.json().catch(() => ({message: r.statusText}));
          return {data: null, error: e};
        }
        const data = _method === "DELETE" ? null : await r.json().catch(() => null);
        return {data, error: null};
      }catch(e){
        return {data: null, error: e};
      }
    }

    return chain;
  }

  function rpc(fn, params){
    return {
      then: function(resolve, reject){
        fetch(`${url}/rest/v1/rpc/${fn}`, {
          method: "POST",
          headers,
          body: JSON.stringify(params)
        }).then(r => r.json()).then(d => resolve({data:d, error:null})).catch(e => resolve({data:null, error:e}));
      }
    };
  }

  return {storage, from, rpc};
}

global.supabaseCreateClient = createClient;
// Compat avec l'ancien format window.supabase.createClient
global.supabase = {createClient};

})(window);
