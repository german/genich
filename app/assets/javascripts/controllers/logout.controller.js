angular.module('pansionatApp').
  controller('Logout', function($scope, $stateParams, $http, Auth, $state, $localStorage) {
    $scope.logout = function(){
      var config = {
        headers: {
          'X-HTTP-Method-Override': 'DELETE'
        }
      };
      // Log in user...
      // ...
      Auth.logout(config).then(function(user) {
        $state.go('help');
      }, function(error) {
          // An error occurred logging out.
      });

      $scope.$on('devise:logout', function(event, user) {
          // ...
      });
    };
  })