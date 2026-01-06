const CACHE_NAME = 'ayyappa-pradakshina-v2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './ayyappa.html',
    './hanuman.html',
    './sai_baba.html',
    './mantra.html',
    './likhita.html',
    './styles.css',
    './common.css',
    './mantra.css',
    './ayyappa_script.js',
    './likhita_script.js',
    './engine.js',
    './utils.js',
    './data.js',
    './images/app_icon.png',
    './images/banner2.png',
    './images/sai_baba_banner.png',
    './images/logo/ayyappa_logo.png',
    './images/logo/Hanuman_logo.png',
    './images/logo/SaiBaba_logo.png',
    './images/logo/Likhita_logo.png',
    './images/logo/om_logo.png'
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
