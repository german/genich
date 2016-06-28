angular.module('pansionatApp').factory('Hotel', ['$resource', function($resource) {
  return $resource('/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT', 
     url: '/hotels/:id',
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
    },
    'get': { method: 'GET', isArray: false,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    }
  });
}]);
