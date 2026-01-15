const CACHE_NAME = 'sadhana-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './ayyappa.html',
    './hanuman.html',
    './sai_baba.html',
    './mantra.html',
    './pradakshina.html',
    './pooja.html',
    './ganesh_pooja.html',

    './styles.css',
    './common.css',
    './mantra.css',
    './ayyappa_script.js',
    './hanuman_script.js',
    './sai_script.js',

    './engine.js',
    './utils.js',
    './data.js',
    './images/app_icon.png',
    './images/banner2.png',
    './images/sai_baba_banner.png',
    './images/logo/ayyappa_logo.png',
    './images/logo/Hanuman_logo.png',
    './images/logo/SaiBaba_logo.png',
    './images/logo/PRADAKSHINA_LOGO.png',
    './images/logo/pooja_logo.png',
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
