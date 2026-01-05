const CACHE_NAME = 'ayyappa-pradakshina-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './sai_baba.html',
    './styles.css',
    './common.css',
    './script.js',
    './sai_script.js',
    './engine.js',
    './utils.js',
    './data.js',
    './images/app_icon.png',
    './images/banner2.png',
    './images/sai_baba_banner.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
