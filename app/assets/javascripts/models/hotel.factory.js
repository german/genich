angular.module('pansionatApp').factory('Hotel', function($resource) {
  return $resource('http://localhost:3000/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT', url: 'http://localhost:3000/hotels/:id'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})