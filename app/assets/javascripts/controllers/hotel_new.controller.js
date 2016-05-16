angular.module('pansionatApp').controller('NewHotel', function($scope, $http, $state, Hotel, Auth) {
  $scope.myuser = window.localStorage.getItem('currentUser');

  $scope.save = function() {
    Hotel.save({ hotel: $scope.hotel }, function(response) {
      console.log(response);
      $state.go('hotel', {id: response.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };

  $scope.update = function(){
    Hotel.update({ hotel: $scope.hotel, id: $scope.hotel.id }, function(response) {
      console.log('обновляем');
      $state.go('hotel', {id: response.id})
    });
  }
})