// APP COCHO CENTRAL V7.4 SUPABASE — COCHOS / MAPA INTEGRADO
const CACHE_NAME='app-cocho-central-v7-4-cochos-mapa-integrado';
const CORE=['./','./index.html?v=7.4','./manifest.json?v=7.4','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE).catch(()=>null)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request;const url=new URL(req.url);if(url.origin!==self.location.origin){event.respondWith(fetch(req));return;}if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match('./index.html?v=7.4')));return;}event.respondWith(caches.match(req).then(cached=>cached||fetch(req)))});
