angular.module('pansionatApp').controller('RegistrationCtrl', function($scope, $stateParams, $http, $state) {
  $scope.save = function() {
  	console.log($scope.user.$valid)
    if ($scope.user.$valid == true)
    	// ($scope.email && $scope.password && $scope.password_confirmation)
    	 {
	    $http.post('/users', {user: {
	    	email: $scope.email, 
	    	password: $scope.password, 
	    	password_confirmation: $scope.password_confirmation
	    }})
	      .success(function(data, status, headers, config){
	        console.log(data);
	        $state.go('login');
	    });
	  } else {
			alert('Исправьте ошибки')
	  }
  }
})