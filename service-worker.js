const CACHE_NAME='app-cocho-central-v6-3-lancamentos-historico';
const CORE=['./','./index.html?v=6.3','./manifest.json?v=6.3','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==self.location.origin){e.respondWith(fetch(e.request));return}if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html?v=6.3')));return}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
