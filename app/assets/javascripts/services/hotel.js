app = angular.module('pansionatApp', ['ngResource']);

app.factory('Hotel', function($resource) {
  return $resource('http://localhost:3000/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT'}
  });
});
