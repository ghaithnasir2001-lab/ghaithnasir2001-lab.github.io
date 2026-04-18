const CACHE_NAME = 'sonic-delivery-v1';
const urlsToCache = [
    './index.html',
    './order.html',
    './style.css',
    './script.js',
    './order.js',
    './logo.png'
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
