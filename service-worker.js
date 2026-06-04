const CACHE_NAME = 'app-cocho-central-v5-8-5-2-gerar-acesso';
const ASSETS = ['./index.html?v=5.8.5.2-gerar-acesso','./manifest.json'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>null))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => { const req=e.request; if(req.method!=='GET') return; e.respondWith(fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(req, copy)).catch(()=>null); return res; }).catch(()=>caches.match(req))); });
