angular.module('pansionatApp').factory('Hotel', function($resource) {
  return $resource('/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT', url: '/hotels/:id'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})