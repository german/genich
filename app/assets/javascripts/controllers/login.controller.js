angular.module('pansionatApp').controller('LoginCtrl', function($scope, $stateParams, $http, Auth, $state, $localStorage, $sessionStorage) {
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
      // console.log(user); // => {id: 1, ect: '...'}
      // $scope.user = user;
      // localStorage.setItem('user', JSON.stringify(user));
      // $scope.myuser = window.localStorage.getItem('user');
      // console.log($scope.user.id);
      $state.go('home');
    }, function(error) {
      // Authentication failed...
      alert('Неправильный логин или пароль')
    });

    $scope.$on('devise:login', function(event, currentUser) {
      $scope.currentUser = currentUser;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      console.log($scope.currentUser.id)
      $state.go('premium');
      // after a login, a hard refresh, a new tab
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
      // user logged in by Auth.login({...})

    });
  }
})

