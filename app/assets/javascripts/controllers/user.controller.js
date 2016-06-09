angular.module('pansionatApp').controller('UserCtrl',
	function($scope, $stateParams, User, $http, $localStorage, $sessionStorage) { 
		$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));

		$scope.updateUser = function(myuser_id, credentials) {
    	User.update({id: myuser_id, myuser_email: $scope.myuser.email }, function(response) {
      	console.log(response);
    	})
  	};
	}
)