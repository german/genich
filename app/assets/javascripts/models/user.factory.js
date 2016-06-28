angular.module('pansionatApp').factory('User', ['$resource', function($resource) {
  return $resource('/users', { id: '@id'},
  {
   'update': { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, isArray: true
    },
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
}]);
