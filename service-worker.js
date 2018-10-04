/*Array with files we want to put em in cache*/
const filesToBeCached = [
      '/',
      '/css/main.css',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/data/restaurants.json',
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg',
      '/img/8.jpg',
      '/img/9.jpg',
      '/img/10.jpg',
       '/img/',
      '/index.html',
      '/restaurant.html',
      '/img/small/1.jpg',
      '/img/small/2.jpg',
      '/img/small/3.jpg',
      '/img/small/4.jpg',
      '/img/small/5.jpg',
      '/img/small/6.jpg',
      '/img/small/7.jpg',
      '/img/small/8.jpg',
      '/img/small/9.jpg',
      '/img/small/10.jpg',
     ];

/*this will trigger on install event and will cache files.*/
self.addEventListener('install', function(event) {
   console.log('Trying to install service worker');
   event.waitUntil(
    caches.open('restaurant-reviews-app')
    .then(function(cache) {
     return cache.addAll(filesToBeCached)
     .then(function() {
      console.log('Finished caching files!');
     })
     .catch(function(error) {
      console.log('Ann error occured: ', error);
     })
   })
 );
});


/*this will trigger on fetchs request from the cache and make the app works offline*/
self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request)
   .then(function(response) {
     return response || fetch(event.request);
   })
 );
});  



