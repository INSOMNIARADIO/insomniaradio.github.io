const CACHE_NAME = "insomnia-v3";
const ASSETS = [
  "/",
  "/index.html",
  "/INSOMNIA_perfil.png",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request));
});