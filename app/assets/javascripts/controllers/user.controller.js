angular.module('pansionatApp').controller('UserCtrl',
	function($scope, $stateParams, User, $http, $localStorage, $sessionStorage) { 
		$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));

		$scope.updateUser = function(myuser_id) {
    	User.update({id: myuser_id, myuser_email: $scope.edit_myuser.email }, function(response) {
      	console.log(response);
    	})
  	};
	}
)