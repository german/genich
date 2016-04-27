angular.module('pansionatApp').controller('RegistrationCtrl', function($scope, $stateParams, $http) {
  $scope.save = function() {
    $http.post('/users', {user: {email: $scope.email, password: $scope.password, password_confirmation: $scope.password_confirmation}})
      .success(function(data, status, headers, config){
        console.log(data);
    });
  }
})