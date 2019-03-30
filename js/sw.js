this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('my cache').then(function(e){
       e.addAll([
        "./css/index.css"
      ]);
    })
  );
});

this.addEventListener("fetch",function(event){
  event.respondWith(
  caches.match(event.request).then(function(resp){
      return resp || fetch(event.request).then(
        function(response){
          caches.open("my cache").then(function(cache){
            return cache.put(event.request,response.clone());
          })
        });
    }));
});
