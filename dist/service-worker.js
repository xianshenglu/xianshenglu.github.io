importScripts("precache-manifest.e26fc94147777dc2a64589821dd99f64.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
/* eslint-disable no-undef */
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

