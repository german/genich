angular.module('pansionatApp').controller('HotelShow', function($scope, $stateParams,$http, $state, Album, Hotel) {
  
  $scope.myuser = window.localStorage.getItem('currentUser');

  var self = this;
  self.images = [];

  $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.hotel = data;
    if($scope.hotel.albums.length > 0) {
      $.each($scope.hotel.albums[0].photos, function(index, photo) {
        //console.log(photo);
        self.images.push({thumb: photo.photo.medium.url, img: photo.photo.url, desciption: photo.photo.name})
      });
    }
  });

  $scope.newAlbum  = new Album({hotel_id: $stateParams.id});

  $scope.save = function() {
    Album.save({ hotel_id: $stateParams.id, album: $scope.newAlbum }, function(response) {
      console.log(response);
      $state.go('hotel', {id: $stateParams.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };

  $scope.update = function(){
    Hotel.update({ hotel: $scope.hotel }, function(response) {
      console.log('обновляем');
      $state.go('hotel', {id: response.id})
    });
  }
})