// Service worker minimal — requis par Chrome/Edge pour proposer l'installation PWA.
// Ne mets rien en cache pour l'instant : on veut toujours la dernière version en ligne.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Laisse passer toutes les requêtes vers le réseau normalement.
});
