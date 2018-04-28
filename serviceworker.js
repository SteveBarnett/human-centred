---
---
const version = '0.0.5';
const staticCacheName = version + 'staticfiles';
const imageCacheName = 'images';
const pagesCacheName = 'pages';
const cacheList = [
  staticCacheName,
  imageCacheName,
  pagesCacheName
];

function stashInCache(cacheName, request, response) {
  caches.open(cacheName)
      .then( cache => cache.put(request, response) );
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

addEventListener('install', installEvent => {
  skipWaiting();
  installEvent.waitUntil(
    caches.open(staticCacheName).then(staticCache => {
      staticCache.addAll([
        '/img/logo.jpg'
      ]);
      return staticCache.addAll([
        '/css/style.css?ver={{ site.css-version }}',
        '/',
        '/about/',
        '/community/',
        '/offline/',
        '/img/offline.svg'
      ]);
    })
  );
});

self.addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if(!cacheName.includes(staticCacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then( () => {
      return clients.claim();
    })
  );
});

addEventListener('message', messageEvent => {
  if(messageEvent.data === 'clean up caches') {
    trimCache(pagesCacheName, 10);
    trimCache(imageCacheName, 20);
  }
})

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;

  if (request.headers.get('Accept').includes('text/html')) {
    fetchEvent.respondWith(
      fetch(request)
      .then( responseFromFetch => {
        let copy = responseFromFetch.clone();
        fetchEvent.waitUntil(
          stashInCache(pagesCacheName, request, copy)
        );
        return responseFromFetch;
      })
      .catch(error => {
        return caches.match(request)
        .then( responseFromCache => {
          if (responseFromCache) {
            return responseFromCache;
          }
          return caches.match('/offline/');
        })
      })
    );
    return;
  }

  if (request.headers.get('Accept').includes(' image')) {
    fetchEvent.respondWith(
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
          fetchEvent.waitUntil(
            fetch(request)
            .then (responseFromFetch => {
              stashInCache(imageCacheName, request, responseFromFetch)
            })
          )
          return responseFromCache;
        }
        return fetch(request)
        .then( responseFromFetch => {
          let copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            stashInCache(imageCacheName, request, copy)
          );
          return responseFromFetch;
        })
        .catch( error => {
          return caches.match('/img/fallback.svg');
        });
      })
    );
    return;
  }

  fetchEvent.respondWith(
    caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      }
      return fetch(request);
    })
  );
});