angular.module('pansionatApp').factory('Album', function($resource) {
  return $resource('/hotels/:hotel_id/albums/:id', 
    { 
      hotel_id: '@hotel_id',
      id: '@id'
    },
  {
   'update': { method: 'PUT', url: '/albums/:id',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
  },
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})
