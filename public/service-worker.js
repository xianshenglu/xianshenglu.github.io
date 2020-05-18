self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
/* eslint-disable no-undef */
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
