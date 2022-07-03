/* global self, caches, fetch */

const cName = 'Minesweeper'
const cFiles = [
  'index.html',
  'static/css/style.css',
  'static/audio/bomb.mp3',
  'static/audio/winner.mp3',
  'static/js/main.js',
  'static/js/util.js'
]

// create and install cache
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cName)
      .then(cache => { return cache.addAll(cFiles) })
      .catch(err => { console.error(err) })
  )
})

// caching strategy (load from cache first, then try to call the internet)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      return res || fetch(evt.request)
    })
  )
})
