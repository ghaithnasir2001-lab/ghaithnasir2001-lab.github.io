const CACHE_NAME = 'sonic-delivery-v4';
const urlsToCache = [
    '/',
    '/index.html',
    '/order.html',
    '/style.css',
    '/script.js',
    '/order.js',
    '/logo.png',
    '/splash_delivery_icon.png',
    '/icon-192.png',
    '/icon-512.png',
    '/screenshot-wide.png',
    '/screenshot-narrow.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return Promise.all(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => console.log('Failed cache:', url, err));
                    })
                );
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
