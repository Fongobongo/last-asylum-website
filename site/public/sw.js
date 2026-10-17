const CACHE_NAME = 'la-hub-v3';

const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/og-cover.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET and cross-origin analytics/LDShop requests
  if (req.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Only content-hashed build assets (/_astro/*, /js/* with ?v= query) are
  // safe to cache forever: their URL changes when the content changes.
  // Everything else — infographics, images, HTML — is network-first so
  // returning visitors actually see updates (gift codes change daily!).
  const isImmutable =
    url.pathname.startsWith('/_astro/') ||
    (url.pathname.startsWith('/js/') && url.search.length > 0);

  if (isImmutable) {
    // Cache-First
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        }).catch(() => caches.match('/favicon.svg'));
      })
    );
    return;
  }

  // Network-First with cache fallback (offline access to visited pages)
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => {
          if (cached) return cached;
          // Offline navigation fallback: cached home page
          if (req.mode === 'navigate') return caches.match('/');
          return Response.error();
        })
      )
  );
});
