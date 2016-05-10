angular.module('pansionatApp').factory('Photo', function($resource) {
  return $resource ('http://localhost:3000/albums/:album_id/photos/:id',
    {
      album_id: '@album_id',
      id: '@id' 
    },
    {
      'update': { method: 'PUT'},
      'delete': { method: 'DELETE'},
      'save': { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }
  });
})