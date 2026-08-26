// Service Worker V38 — stratégie cache-first pour les fichiers statiques,
// network-first pour les requêtes API (Supabase).
// Permet le fonctionnement hors-ligne (zones blanches en intervention).

const CACHE_NAME = "firecheck-v38";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./supabase.js",
  "./supabase-sdk.js",
  "./manifest.json"
];

// Installation : pré-cache des fichiers statiques
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch : cache-first pour les statiques, network-first pour les API
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Requêtes API Supabase ou externes → réseau d'abord
  if (url.hostname !== self.location.hostname || url.pathname.startsWith("/rest/") || url.pathname.startsWith("/auth/")) {
    return; // Laisser passer vers le réseau
  }

  // Fichiers statiques → cache d'abord, puis réseau en fallback + mise à jour du cache
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached); // Si réseau échoue, on garde le cache

      return cached || fetchPromise;
    })
  );
});
