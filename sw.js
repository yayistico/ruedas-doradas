/* Service worker "red primero": siempre intenta traer la versión más nueva de esta página desde internet y solo si no hay conexión usa la copia guardada.
   Así, cuando actualizas index.html en GitHub, los usuarios ven el cambio al abrir (no se quedan con una versión vieja).
   No guarda datos de la app ni de los usuarios: solo el cascarón de esta página (index, manifiesto, ícono). La app de Apps Script siempre se carga de internet. */
var CACHE = 'rd-cascaron-v2';
var ARCHIVOS = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARCHIVOS.map(function (u) { return new Request(u, { cache: 'reload' }); })); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;   // solo archivos de esta página
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(function (resp) {
      if (resp && resp.ok) { var copia = resp.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copia); }); }   // deja al día la copia de respaldo
      return resp;
    }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('index.html'); }); })
  );
});
