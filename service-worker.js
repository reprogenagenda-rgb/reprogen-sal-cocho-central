const CACHE_NAME = 'app-cocho-central-v5-5-1-hotfix-cache-v1';
const CORE_ASSETS = [
  './',
  './index.html?v=5.5.1',
  './manifest.json?v=5.5.1',
  './icons/icon-192.png?v=5.5.1',
  './icons/icon-512.png?v=5.5.1'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (
    url.origin.includes('script.google.com') ||
    url.origin.includes('googleusercontent.com') ||
    url.origin.includes('tile.openstreetmap.org') ||
    url.origin.includes('arcgisonline.com') ||
    url.origin.includes('unpkg.com')
  ) {
    event.respondWith(fetch(req));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const clone = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
      return resp;
    }).catch(() => caches.match('./index.html?v=5.5.1')))
  );
});
