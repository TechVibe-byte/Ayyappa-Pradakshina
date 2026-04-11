const CACHE_NAME = 'sadhana-dynamic-v2';
const STATIC_CACHE_NAME = 'sadhana-static-v2';

const CORE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './common.css',
    './engine.js',
    './utils.js',
    './data.js',
    './images/app_icon.png'
];

self.addEventListener('install', (event) => {
    // Skip waiting to immediately activate the new service worker
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CORE_ASSETS);
            })
    );
});

self.addEventListener('activate', (event) => {
    // Take control of all clients immediately
    event.waitUntil(clients.claim());
    
    // Clear out old caches
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests or chrome extension files
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Ensure the response is valid before caching it
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Network failed, we either have the cached response or nothing.
                // It will just return cachedResponse outside this block.
            });

            // Return cached response immediately if available, while network fetch updates cache in background
            return cachedResponse || fetchPromise;
        })
    );
});
