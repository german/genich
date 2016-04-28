angular.module('pansionatApp').controller('Header', function($scope, Auth){
	$scope.isAuthenticated = Auth.isAuthenticated();
})