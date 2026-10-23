/**
 * service-worker.js — offline-first caching for NetReady+.
 *
 * Strategy: cache-first for the app shell (HTML/CSS/JS/data), falling back
 * to network, so the entire course works offline after the first visit.
 * Bump CACHE_VERSION whenever any precached file changes so clients pick
 * up the update instead of serving stale content forever.
 */
const CACHE_VERSION = 'netready-plus-v31';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './css/responsive.css',
  './js/core.js',
  './js/course-data.js',
  './js/content/lesson-helper.js',
  './js/content/module-0.js',
  './js/content/module-1.js',
  './js/content/module-2.js',
  './js/content/module-3.js',
  './js/content/module-4.js',
  './js/content/module-5.js',
  './js/content/module-6.js',
  './js/content/module-7.js',
  './js/content/module-8.js',
  './js/content/module-9.js',
  './js/content/module-10.js',
  './js/content/module-11.js',
  './js/content/module-12.js',
  './js/content/module-13.js',
  './js/content/module-14.js',
  './js/content/module-15.js',
  './js/content/questions-bank.js',
  './js/content/questions-bank-2.js',
  './js/content/glossary-data.js',
  './js/content/flashcards-data.js',
  './js/content/ports-data.js',
  './js/content/labs-data.js',
  './js/progress.js',
  './js/quiz-engine.js',
  './js/flashcards.js',
  './js/subnet-tool.js',
  './js/labs.js',
  './js/app.js',
  './assets/icons/favicon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  // cache:'reload' bypasses the HTTP cache so a new deploy never precaches stale copies of files.
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => (event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()));
    })
  );
});
