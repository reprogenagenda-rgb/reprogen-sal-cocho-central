// APP COCHO CENTRAL V6.0.1 SUPABASE — SW FIX
// Correção crítica: o Service Worker só aplica fallback para navegação do próprio GitHub Pages.
// Ele NÃO pode interceptar chamadas externas do Supabase/CDN retornando index.html.
const CACHE_NAME='app-cocho-central-v6-0-1-supabase-sw-fix';
const CORE=[
  './',
  './index.html?v=6.0.1',
  './manifest.json?v=6.0.1',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Nunca interceptar Supabase, CDN, APIs externas ou qualquer origem diferente da Central.
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(req));
    return;
  }

  // Para navegação HTML da própria Central: rede primeiro, fallback para index.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index.html?v=6.0.1'))
    );
    return;
  }

  // Para arquivos locais estáticos: cache first, depois rede.
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
