const CACHE_NAME = 'sonic-delivery-v2';
const urlsToCache = [
    '/sonic-delivery/',
    '/sonic-delivery/index.html',
    '/sonic-delivery/order.html',
    '/sonic-delivery/style.css',
    '/sonic-delivery/script.js',
    '/sonic-delivery/order.js',
    '/sonic-delivery/logo.png',
    '/sonic-delivery/splash_delivery_icon.png',
    '/sonic-delivery/icon-192.png',
    '/sonic-delivery/icon-512.png',
    '/sonic-delivery/screenshot-wide.png',
    '/sonic-delivery/screenshot-narrow.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
