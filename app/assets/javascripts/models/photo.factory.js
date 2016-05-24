angular.module('pansionatApp').factory('Photo', function($resource) {
  return $resource ('/albums/:album_id/photos/:id',
    {
      album_id: '@album_id',
      id: '@id' 
    },
    {
      'update': { method: 'PUT'},
      'delete': { method: 'DELETE', url: '/photos/:id'},
      'save': { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }
  });
})
