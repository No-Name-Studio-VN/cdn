const CACHE_NAME = "v3.3::CacheFirstSafe";
var offlineUrl = "offline";

const urlsToCache = [
  "/",
  offlineUrl,
  "/index.html",
  "/css/packed.css",
  "/js/index.js",
  "logo.png",
  "thumb.png",
];

function serveOfflineImage(request) {
  if (request.headers.get('Accept').indexOf('image') !== -1) {
      return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' } });
  }
}

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(urlsToCache);
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith('chrome-extension') || event.request.url.includes('extension') || (event.request.url.indexOf('http') !== 0)) return;
  event.respondWith((async ()   => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          return caches.match(event.request)
            .then(function (response) {
              return caches.match(offlineUrl);
            });
        }
    }
  })());
});