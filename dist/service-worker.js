importScripts("precache-manifest.4b720ca036fd57fb303936ca9db9c1ad.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

