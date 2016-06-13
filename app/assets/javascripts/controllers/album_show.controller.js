angular.module('pansionatApp').controller('AlbumShow', AlbumShow);

function AlbumShow($scope, $stateParams,$http, $state, Hotel, Album, Photo, FileUploader) {
  $http.get('/albums/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.album = data;
  });
  
  var uploader = $scope.uploader = new FileUploader({
    url: '/albums/'+$stateParams.id+'/photos'
  });

  uploader.onCompleteAll = function() {
    console.info('onCompleteAll');
    window.location.reload(); // reload the page
  };

  $scope.set_cover = function(hotel_id, photo_id) {
    console.log(photo_id);
    Hotel.update({ id: hotel_id, hotel: {cover_photo_id: photo_id} }, function(response) {
      console.log(response);
      alert('Обложка пансионата была успешно заменена!')
    });
  }
  $scope.delete = function(photo_id) {
    if(confirm('Вы уверены, что хотите удалить эту фотограцию?')){
      Photo.delete({ id: photo_id }, function(response) {
        window.location.reload();
        $state.go('albums', {id: $stateParams.id})
        // Optional function. Clear html form, redirect or whatever.
      });
    }
  };
};
