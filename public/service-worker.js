// public/service-worker.js
console.log("hi")

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    // Main routes
    '/',
    '/book',
    '/payment',
    '/score-reporting',
    '/study-partner',
    '/study-plan',
    '/tests',
    '/toefl-voucher',
    '/university-shortlisting',
    '/vocabulary-course',
  
    // Static assets
    '/favicon.ico',
    '/globals.css',
  
    // Components (adjust paths as necessary)
    '/components/getCode/GetCode.tsx',
    '/components/getCode/GetCode.content.ts',
    '/components/getCode/HowToGetCode.tsx',
    '/components/getCode/Video.tsx',
    '/components/Head/GoogleAnalyticsTracker.tsx',
    '/components/Head/Seo.tsx',
    '/components/hero/Action.tsx',
    '/components/hero/Hero.tsx',
    '/components/sidebar/sidebar-button.tsx',
    '/components/sidebar/sidebar-desktop.tsx',
    '/components/sidebar/sidebar-mobile.tsx',
    '/components/sidebar/sidebar.tsx',
    '/components/sidebar/SidebarDesktop.module.css',
    '/components/ui/3d-pin.tsx',
    '/components/ui/Alert.tsx',
    '/components/ui/avatar.tsx',
    '/components/ui/backgroundBoxes.tsx',
    '/components/ui/button.tsx',
    '/components/ui/drawer.tsx',
    '/components/ui/FAQ-landingpage.tsx',
    '/components/ui/FeaturesSectionLandingPage.tsx',
    '/components/ui/form.tsx',
    '/components/ui/input.tsx',
    '/components/ui/label.tsx',
    '/components/ui/Loader.tsx',
    '/components/ui/LoadingSpinner.tsx',
    '/components/ui/popover.tsx',
    '/components/ui/select.tsx',
    '/components/ui/separator.tsx',
    '/components/ui/sheet.tsx',
    '/components/ui/SidebarLoadingSkeleton.tsx',
    '/components/ui/sticky-scroll-reveal.tsx',
    '/components/ui/TestCard.tsx',
    '/components/ui/Testimonials.tsx',
    '/components/ui/textarea.tsx',
    '/components/whyUs/PerkCard.tsx',
    '/components/whyUs/WhyUs.content.ts',
    '/components/whyUs/WhyUs.tsx',
  
    // Any other static assets from the public directory
    // Example: '/images/hero.png'
  ];
  

self.addEventListener('install', event => {
  console.log('[Service Worker] Install event');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching URLs');
      return cache.addAll(urlsToCache);
    }).catch(error => {
      console.error('[Service Worker] Caching failed', error);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activate event');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch event for', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('[Service Worker] Serving from cache:', event.request.url);
        return response;
      }
      console.log('[Service Worker] Fetching from network:', event.request.url);
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    }).catch(error => {
      console.error('[Service Worker] Fetching failed', error);
    })
  );
});
