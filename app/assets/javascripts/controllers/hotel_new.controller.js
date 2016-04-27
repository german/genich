angular.module('pansionatApp').controller('NewHotel', function($scope, $http, $state, Hotel, Auth) {
  $scope.isAuthenticated = Auth.isAuthenticated();
  console.log('isAuthenticated', $scope.isAuthenticated);

  $scope.save = function() {
    Hotel.save({ hotel: $scope.hotel }, function(response) {
      console.log(response);
      $state.go('hotel', {id: response.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
})