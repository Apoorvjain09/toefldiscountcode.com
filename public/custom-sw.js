// public/custom-sw.js
self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
  });
  
  self.addEventListener('fetch', event => {
    if (event.request.url.includes('/') || event.request.url.includes('/book')) {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request).then(response => {
            return caches.open('custom-cache').then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    }
  });
  