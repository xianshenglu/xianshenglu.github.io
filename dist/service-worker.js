importScripts("precache-manifest.5fe7feb97afea93fddc1ac09f3732cfe.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [
  {
    url: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    revision: null
  }
].concat(self.__precacheManifest || [])
/* eslint-disable no-undef */
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

