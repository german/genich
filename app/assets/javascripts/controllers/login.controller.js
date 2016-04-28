angular.module('pansionatApp').controller('LoginCtrl', function($scope, $stateParams, $http, Auth, $state) {
  $scope.save = function() {
    var credentials = {
      email: $scope.email,
      password: $scope.password
    };
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };


    Auth.login(credentials, config).then(function(user) {
      console.log(user); // => {id: 1, ect: '...'}
      $state.go('home');
    }, function(error) {
      // Authentication failed...
      alert('Неправильный логин или пароль')
    });

    $scope.$on('devise:login', function(event, currentUser) {
      console.log('currentUser', currentUser);
      $state.go('home');
      // after a login, a hard refresh, a new tab
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
      // user logged in by Auth.login({...})

    });
  }
})