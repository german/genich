angular.module('pansionatApp').controller('UserCtrl',
	function($scope, $stateParams, User, $http, $localStorage, $sessionStorage, $auth) {
    $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $auth.validateUser();
		$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));

		$scope.updateUser = function(myuser_id) {
      var user_params = {id: myuser_id, user: {
          email: $scope.myuser.email, 
          current_password: $scope.myuser.current_password,
          password: $scope.myuser.password
        } 
      }

    	User.update(user_params, function(response) {
      	console.log(response);
    	})
  	};
	}
)
