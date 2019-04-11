---
---
const version = '0.0.9';
const staticCacheName = 'staticfiles-' + version;
const imagesCacheName = 'images';
const pagesCacheName = 'pages';

const cacheList = [
  staticCacheName,
  imagesCacheName,
  pagesCacheName
];

const offlinePages = [
  '/',
  '/about/',
  '/community/',
  '/offline/'
];

function updateStaticCache() {
  return caches.open(staticCacheName)
      .then( cache => {
          // These items won't block the installation of the Service Worker
          cache.addAll([
            '/img/logo.jpg',
            '/wp-content/uploads/2016/09/ctfeds-400x282.jpg',
            '/wp-content/uploads/2016/09/devicelab-400x225.jpg',
            '/img/SteveBarnett.jpg',
            '/wp-content/uploads/2016/09/workshop-opening-400x225.jpg',
            '/wp-content/uploads/2016/09/IMG_1422-400x266.jpg'
          ]);
          // These items must be cached for the Service Worker to complete installation
          return cache.addAll([
            '/css/style.css?ver={{ site.css-version }}',
            '/img/offline.svg'
          ].concat(offlinePages));
      });
}

function clearOldCaches() {
  return caches.keys()
      .then( keys => {
          return Promise.all(keys
              .filter(key => !cacheList.includes(key))
              .map(key => caches.delete(key))
          );
      });
}

function trimCache(cacheName, maxItems) {
  caches.open(cacheName)
  .then( cache => {
    cache.keys()
    .then(keys => {
      if (keys.length > maxItems) {
        cache.delete(keys[0])
        .then(trimCache(cacheName, maxItems));
      }
    });
  });
}

function stashInCache(cacheName, request, response) {
  caches.open(cacheName)
      .then( cache => cache.put(request, response) );
}

self.addEventListener('install', event => {
  event.waitUntil(updateStaticCache()
      .then( () => self.skipWaiting() )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clearOldCaches()
      .then( () => self.clients.claim() )
  );
});

self.addEventListener('message', event => {
  if(event.data === 'clean up caches') {
    trimCache(pagesCacheName, 10);
    trimCache(imagesCacheName, 20);
  }
})

self.addEventListener('fetch', event => {
  let request = event.request;
  let url = new URL(request.url);

  if (request.method !== 'GET') {
      return;
  }

  // For HTML requests, try the network first, fall back to the cache, finally the offline page
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then( response => {
          // Stash a copy of this page in the pages cache
          let copy = response.clone();
          if (offlinePages.includes(url.pathname) || offlinePages.includes(url.pathname + '/')) {
            stashInCache(staticCacheName, request, copy);
          } else {
            stashInCache(pagesCacheName, request, copy);
          }
          return response;
        })
        .catch( () => {
          return caches.match(request)
            .then( response => response || caches.match('/offline/') );
        })
    );
    return;
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  event.respondWith(
    caches.match(request)
      .then(response => {
        return response || fetch(request)
        .then( response => {
          // If the request is for an image, stash a copy of this image in the images cache
          if (request.headers.get('Accept').includes('image')) {
            let copy = response.clone();
            stashInCache(imagesCacheName, request, copy);
          }
          return response;
        })
        .catch( () => {
          // If the request is for an image, show an offline placeholder
          if (request.headers.get('Accept').includes('image')) {
            return caches.match('/img/fallback.svg');
          }
        });
      })
  );
});