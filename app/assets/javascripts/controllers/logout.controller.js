angular.module('pansionatApp').controller('Logout', 
  ['$scope', '$stateParams', '$http', 'Auth', '$state', '$localStorage', Logout]);

function Logout($scope, $stateParams, $http, Auth, $state, $localStorage) {
  $scope.logout = function(){
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'DELETE'
      }
    };

    // Log in user...
    // ...
    Auth.logout(config).then(function(user) {
      localStorage.clear();
      $state.go('help');
    }, function(error) {
      // An error occurred logging out.
    });

    $scope.$on('devise:logout', function(event, user) {
      // ...
    });
  };
};
