/* REPROGEN CENTRAL V5.3.8 — PWA Instalável
   Compatível com GitHub Pages, Android Chrome e JavaScript ES5.
   App shell offline + atualização segura de cache.
*/

var CACHE_VERSION = 'reprogen-central-v5-3-8-gps-definitivo';
var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return Promise.all(APP_SHELL.map(function(url) {
        return cache.add(url).catch(function(err) {
          console.warn('[SW Central] Falha ao cachear:', url, err);
          return Promise.resolve();
        });
      }));
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        if (key !== CACHE_VERSION) return caches.delete(key);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  var url = event.request.url || '';

  /* Não interferir em chamadas do Apps Script/API. */
  if (url.indexOf('script.google.com') >= 0 || url.indexOf('script.googleusercontent.com') >= 0) {
    event.respondWith(fetch(event.request).catch(function() {
      return new Response(JSON.stringify({sucesso:false, offline:true, erro:'Sem internet para sincronizar com Apps Script.'}), {
        status: 503,
        headers: {'Content-Type': 'application/json'}
      });
    }));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      return fetch(event.request).then(function(response) {
        /* Cache oportunista para libs externas e assets carregados online. */
        try {
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_VERSION).then(function(cache) {
              cache.put(event.request, clone).catch(function(){});
            });
          }
        } catch(e) {}
        return response;
      }).catch(function() {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', {status: 408, statusText: 'Offline'});
      });
    })
  );
});
