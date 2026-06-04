const CACHE_NAME='app-cocho-central-v5-8-5-duplicidade-zero';
const ASSETS=['./','./index.html?v=5.8.5-duplicidade-zero','./manifest.json?v=5.8.5','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;e.respondWith(fetch(r).then(resp=>{const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy)).catch(()=>{});return resp;}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html?v=5.8.5-duplicidade-zero'))));});
