const CACHE = "zqzj-model-hub-v28-robot-first-7";
const ASSETS = [
  "./",
  "./index.html",
  "./tokens-v27.css?v=28.8",
  "./maker-v26.css?v=28.8",
  "./maker-v27.css?v=28.8",
  "./app.js?v=28.8",
  "./manifest.webmanifest?v=28.8",
  "./assets/robot-overview.png",
  "./assets/fonts/SourceHanSansSC-Subset.woff2?v=28.8",
  "./assets/fonts/SourceHanSans-LICENSE.txt"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (!response.ok) return response;
      const copy = response.clone();
      return caches.open(CACHE).then(cache => cache.put(request,copy)).then(() => response);
    }).catch(() => caches.match(request).then(hit => hit || caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(request).then(hit => hit || fetch(request).then(response => {
    if (!response.ok) return response;
    const copy = response.clone();
    return caches.open(CACHE).then(cache => cache.put(request,copy)).then(() => response);
  })));
});
