const CACHE_NAME = 'reprogen-central-v5-4-cache-20260530';
const APP_SHELL = ['./','./index.html','./manifest.json','./libs/leaflet.css','./libs/leaflet.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('script.google.com') || url.hostname.includes('arcgisonline.com') || url.hostname.includes('openstreetmap.org')) return;
  event.respondWith(fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(req, copy)); return res; }).catch(()=>caches.match(req).then(cached => cached || caches.match('./index.html'))));
});
