angular.module('pansionatApp').controller('NewHotel', ['$scope', '$http', '$state', 'Hotel', 'Auth',
  function($scope, $http, $state, Hotel, Auth) {
    Auth.currentUser().then(function (user){
      console.log('user', user);
      $scope.myuser = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.myuser = user;
    });

    $scope.save = function() {
      $scope.hotel.user_id = $scope.myuser.id;
      
      Hotel.save({ hotel: $scope.hotel }, function(response) {
        console.log(response);
        $state.go('hotel', {id: response.id})
        // Optional function. Clear html form, redirect or whatever.
      });
    };

    $scope.update = function(){
      $scope.hotel.user_id = $scope.myuser.id;
      Hotel.update({ hotel: $scope.hotel, id: $scope.hotel.id }, function(response) {
        console.log('обновляем');
        $state.go('hotel', {id: response.id})
      });
    }
}]);
