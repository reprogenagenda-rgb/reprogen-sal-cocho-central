const CACHE_NAME='app-cocho-central-v5-8-6-modo-leve';
const ASSETS=['./','./index.html?v=5.8.6-modo-leve','./manifest.json?v=5.8.6','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html?v=5.8.6-modo-leve'))))});
