angular.module('pansionatApp').controller('RegistrationCtrl', function($scope, $stateParams, $http, $state) {
  $scope.save = function() {
    if($scope.email != "" && $scope.password != "" && $scope.password_confirmation != "") {
	    $http.post('/users', {user: {email: $scope.email, password: $scope.password, password_confirmation: $scope.password_confirmation}})
	      .success(function(data, status, headers, config){
	        console.log(data);
	        $state.go('home');
	    });
	  } else {
	  	alert('Заполните все поля')
	  }
  }
})