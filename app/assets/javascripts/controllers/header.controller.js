angular.module('pansionatApp').controller('Header', ['$scope', 'Auth', function($scope, Auth){
	$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));
	
}]);
