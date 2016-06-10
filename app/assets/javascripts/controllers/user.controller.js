angular.module('pansionatApp').controller('UserCtrl',
	function($scope, $stateParams, User, $http, $localStorage, $sessionStorage, $auth) {
    $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $auth.validateUser();
		$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));

		$scope.updateUser = function(myuser_id, credentials) {
    	User.update({id: myuser_id, user: {email: $scope.myuser.email, password: $scope.myuser.current_password} }, function(response) {
      	console.log(response);
    	})
  	};
	}
)
