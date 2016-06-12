angular.module('pansionatApp').controller('RegistrationCtrl', 
  function($scope, $stateParams, $http, $state, Auth, $http) {

  $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $scope.save = function() {
    console.log($scope.user.$valid);    
    if ($scope.user.$valid == true){
      $http.post('/users', 
        {
          user: {
            email: $scope.email, 
            password: $scope.password, 
            password_confirmation: $scope.password_confirmation,
            role: $scope.role
          }
        }, {
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(
          // successFunction
          function(data, status, headers, config){
            console.log(data);
            $state.go('login');
          },
          // failureFunction
          function(data, status, headers, config) {
            console.log(data.data.errors);
            alert('Исправьте ошибки')
          }
        )
    } else {
      alert('Исправьте ошибки')
    }
  }
})