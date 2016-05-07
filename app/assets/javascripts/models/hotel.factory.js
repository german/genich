angular.module('pansionatApp').factory('Hotel', function($resource) {
  return $resource('http://localhost:3000/hotels/:id', { id: '@id'},
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
  return $resource('http://localhost:3000/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT'},
   'edit': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})