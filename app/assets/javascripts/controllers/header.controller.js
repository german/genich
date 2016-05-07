angular.module('pansionatApp').controller('Header', function($scope, Auth){
	$scope.myuser = window.localStorage.getItem('currentUser');
})