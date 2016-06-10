angular.module('pansionatApp').factory('User', function($resource) {
  return $resource('/users', { id: '@id'},
  {
   'update': { 
      method: 'PUT',
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
