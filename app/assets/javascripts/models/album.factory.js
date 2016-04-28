angular.module('pansionatApp').factory('Album', function($resource) {
  return $resource('http://localhost:3000/hotels/:hotel_id/albums/:id', 
    { 
      hotel_id: '@hotel_id',
      id: '@id'
    },
  {
   'update': { method: 'PUT'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})