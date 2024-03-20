var cacheName = 'cache-v5';
var offlineUrl = '/offline';
//Files to save in cache
var files = [
  '/',
  offlineUrl,
  '/error',
  'https://cdn.nnsvn.me/cp/css/packed.css',
  'https://cdn.nnsvn.me/cp/js/packed.js',
  'https://cdn.nnsvn.me/cp/js/index.js',
  '/uettoolkit',
  'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.0.2/dist/tabler-icons.min.css',
  'https://cdn.jsdelivr.net/npm/apexcharts',
  "https://cdn.nnsvn.me/cp/libs/select2/select2.min.css",
  "https://cdn.nnsvn.me/cp/libs/select2/theme.min.css",
  "https://cdn.nnsvn.me/cp/libs/select2/select2.min.js",
  "https://cdn.nnsvn.me/cp/js/libs/select2.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-table@1.22.3/dist/bootstrap-table.min.css",
  "https://cdn.nnsvn.me/cp/js/bootstrap-table.js",
  "https://cdn.nnsvn.me/cp/js/encrypt.js",
  'https://cdn.nnsvn.me/cp/js/pages/uettoolkit.js',
  'https://cdn.nnsvn.me/cp/manifest.json',
  'https://cdn.nnsvn.me/cp/img/icons/icon-144x144.png',
  'https://cdn.nnsvn.me/cp/fonts/Roobert-Regular.ttf',
];

//Adding `install` event listener
self.addEventListener('install', (event) => {
  console.info('Event: Install');

  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        //[] of files to cache & if any of the file not present `addAll` will fail
        return cache.addAll(files)
          .then(() => {
            console.info('All files are cached');
            return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
          })
          .catch((error) => {
            console.error('Failed to cache', error);
          })
      })
  );
});

/*
  FETCH EVENT: triggered for every request made by index page, after install.
*/

//Adding `fetch` event listener
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('chrome-extension') || event.request.url.includes('extension') || (event.request.url.indexOf('http') !== 0)) return;
  var request = event.request;
  var url = new URL(request.url);
  if (url.origin === location.origin) {
    // Static files cache
    event.respondWith(cacheFirst(request));
  } else {
    // Dynamic API cache
    event.respondWith(networkFirst(request));
  }

  // // Checking for navigation preload response
  // if (event.preloadResponse) {
  //   console.info('Using navigation preload');
  //   return response;
  // }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    try {
      // If the resource was not in the cache, try the network.
      const fetchResponse = await fetch(request);
      return fetchResponse;
    } catch (e) {
      return caches.match(request)
        .then(function (response) {
          return caches.match(offlineUrl);
        });
    }
  }
}

async function networkFirst(request) {
  const dynamicCache = await caches.open(cacheName);
  try {
    const networkResponse = await fetch(request);
    // Cache the dynamic API response
    dynamicCache.put(request, networkResponse.clone()).catch((err) => {
      console.warn(request.url + ': ' + err.message);
    });
    return networkResponse;
  } catch (err) {
    return dynamicCache.match(request)
      .then(function (response) {
        return dynamicCache.match(offlineUrl);
      });
  }
}

/*
  ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
*/

//Adding `activate` event listener
self.addEventListener('activate', (event) => {
  console.info('Event: Activate');

  //Navigation preload is help us make parallel request while service worker is booting up.
  //Enable - chrome://flags/#enable-service-worker-navigation-preload
  //Support - Chrome 57 beta (behing the flag)
  //More info - https://developers.google.com/web/updates/2017/02/navigation-preload#the-problem

  // Check if navigationPreload is supported or not
  // if (self.registration.navigationPreload) { 
  //   self.registration.navigationPreload.enable();
  // }
  // else if (!self.registration.navigationPreload) { 
  //   console.info('Your browser does not support navigation preload.');
  // }

  //Remove old and unwanted caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache); //Deleting the old cache (cache v1)
          }
        })
      );
    })
      .then(function () {
        console.info("Old caches are cleared!");
        // To tell the service worker to activate current one 
        // instead of waiting for the old one to finish.
        return self.clients.claim();
      })
  );
});

/*
  PUSH EVENT: triggered everytime, when a push notification is received.
*/

//Adding `push` event listener
self.addEventListener('push', (event) => {
  console.info('Event: Push');

  var title = 'Push notification demo';
  var body = {
    'body': 'click to return to application',
    'tag': 'demo',
    'icon': '/img/icons/icon-192x192.png',
    'badge': '/img/icons/icon-192x192.png',
    //Custom actions buttons
    'actions': [
      { 'action': 'yes', 'title': 'I ♥ this app!' },
      { 'action': 'no', 'title': 'I don\'t like this app' }
    ]
  };

  event.waitUntil(self.registration.showNotification(title, body));
});

/*
  BACKGROUND SYNC EVENT: triggers after `bg sync` registration and page has network connection.
  It will try and fetch github username, if its fulfills then sync is complete. If it fails,
  another sync is scheduled to retry (will will also waits for network connection)
*/

self.addEventListener('sync', (event) => {
  //Check registered sync name or emulated sync from devTools
  if (event.tag === 'github' || event.tag === 'test-tag-from-devtools') {
    event.waitUntil(
      //To check all opened tabs and send postMessage to those tabs
      self.clients.matchAll().then((all) => {
        return all.map((client) => {
          return client.postMessage('online'); //To make fetch request, check app.js - line no: 122
        })
      })
        .catch((error) => {
          console.error(error);
        })
    );
  }
});

/*
  NOTIFICATION EVENT: triggered when user click the notification.
*/

//Adding `notification` click event listener
self.addEventListener('notificationclick', (event) => {
  var url = '/';

  //Listen to custom action buttons in push notification
  if (event.action === 'yes') {
    console.log('I ♥ this app!');
  }
  else if (event.action === 'no') {
    console.warn('I don\'t like this app');
  }

  event.notification.close(); //Close the notification

  //To open the app after clicking notification
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
      .then((clients) => {
        for (var i = 0; i < clients.length; i++) {
          var client = clients[i];
          //If site is opened, focus to the site
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }

        //If site is cannot be opened, open in new window
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
      .catch((error) => {
        console.error(error);
      })
  );
});