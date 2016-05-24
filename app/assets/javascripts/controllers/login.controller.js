angular.module('pansionatApp').controller('LoginCtrl', 
  function($scope, $stateParams, $http, Auth, $state, $localStorage, $sessionStorage) {

    $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $scope.save = function() {
    var credentials = {
      email: $scope.email,
      password: $scope.password,
      remember_me: $scope.remember_me ? 1 : 0
    };

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    Auth.login(credentials, config).then(function(user) {
      $state.go('home');
    }, function(error) {
      // Authentication failed...
      alert('Неправильный логин или пароль')
    });

    $scope.$on('devise:login', function(event, currentUser) {
      $scope.currentUser = currentUser;
      $scope.currentUser.id = currentUser.id;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('currentUser.id', JSON.stringify(currentUser.id));
      console.log($scope.currentUser)
      $state.go('premium');
      // after a login, a hard refresh, a new tab
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
      // user logged in by Auth.login({...})

    });
  }
})

