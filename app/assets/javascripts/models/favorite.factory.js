angular.module('pansionatApp').factory('Favorite', 
  ['$resource', function($resource) {
  return $resource('/favorites', 
    { 
      hotel_id: '@hotel_id',
      user_id: '@user_id'
    },
  {
    'query': { method: 'GET', isArray: true,
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
}]);
