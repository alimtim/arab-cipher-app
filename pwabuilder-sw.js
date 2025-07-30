// pwabuilder-sw.js
self.addEventListener("install", function (e) {
  console.log("Service Worker: Installed");
  e.waitUntil(
    caches.open("static").then(function (cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/android-chrome-192x192.png",
        "./icons/android-chrome-512x512.png",
        "./icons/favicon-32x32.png",
        "./icons/favicon-16x16.png",
        // أضف مسارات أخرى حسب الحاجة
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});