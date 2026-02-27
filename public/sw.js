const STATIC_CACHE = "iit-study-static-v1";
const IMAGE_CACHE = "iit-study-images-v1";

const PRECACHE_ASSETS = [
  "/",
  "/logo/IIT_study_forum.jpg",
  "/logo/home_.jpg",
  "/logo/course_1.jpg",
  "/logo/course_2.jpg",
  "/logo/course_3.jpg",
  "/logo/hod.png",
  "/tetimonila/1.jpeg",
  "/tetimonila/2.jpeg",
  "/testimonila_image/Ankit Aggarwal AIR 22.jpeg",
  "/testimonila_image/Arjun Chauhan AIR 591.jpeg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  const isImageRequest =
    event.request.destination === "image" ||
    /\.(png|jpe?g|gif|svg|webp)$/i.test(url.pathname);

  if (!isImageRequest) {
    return;
  }

  event.respondWith(
    caches.open(IMAGE_CACHE).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      })
    )
  );
});
