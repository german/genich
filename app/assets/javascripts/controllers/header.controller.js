angular.module('pansionatApp').controller('Header', function($scope, Auth){
	$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));
})