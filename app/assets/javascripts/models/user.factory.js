angular.module('pansionatApp').factory('User', function($resource) {
  return $resource('/users/:id', { id: '@id'},
  {
   'update': { method: 'PUT', url: '/users/:id'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})