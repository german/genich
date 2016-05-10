angular.module('pansionatApp').controller('AlbumShow', AlbumShow);

function AlbumShow($scope, $stateParams,$http, $state, Album, Photo, FileUploader) {
  $http.get('/albums/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.album = data;
  });
  
  var uploader = $scope.uploader = new FileUploader({
    url: 'http://localhost:3000/albums/'+$stateParams.id+'/photos'
  });

  uploader.onCompleteAll = function() {
    console.info('onCompleteAll');
    window.location.reload(); // reload the page
  };

  $scope.delete = function() {
    Photo.delete({ album_id: $stateParams.id, id: $scope.album.photos.url }, function(response) {
      console.log(response);
      $state.go('hotel', {id: $stateParams.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
};