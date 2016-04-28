angular.module('pansionatApp').controller('Show', function($scope, $stateParams,$http, $state, Album) {
  
  var self = this;
  self.images = [];

  $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.hotel = data;
    if($scope.hotel.albums.length > 0) {
      $.each($scope.hotel.albums[0].photos, function(index, photo) {
        console.log(photo);
        self.images.push({thumb: photo.photo.medium.url, img: photo.photo.url, desciption: photo.photo.name})
      });
    }
  });

  // var self = this;
  //   self.images = [
  //     {thumb: 'http://cyber.sports.ru/storage/0000/1/0/1032462331/1440511756.943683_49.png', img: 'http://screenshot.ru/a18107369ded971149e17b51ead02b09.png'}
  //   ];

  $scope.newAlbum  = new Album({hotel_id: $stateParams.id});

  $scope.save = function() {
    Album.save({ hotel_id: $stateParams.id, album: $scope.newAlbum }, function(response) {
      console.log(response);
      $state.go('hotel', {id: $stateParams.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
})