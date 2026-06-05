const CACHE_NAME='app-cocho-central-v5-8-5-5-limpeza-usuarios';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(['./index.html?v=5-8-5-4-limpeza-usuarios','./manifest.json'])))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html?v=5-8-5-4-limpeza-usuarios'))));});
