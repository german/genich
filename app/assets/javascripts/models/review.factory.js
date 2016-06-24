angular.module('pansionatApp').factory('Review', ['$resource', function($resource) {
  return $resource('/hotels/:hotel_id/reviews/:id', 
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
}]);
