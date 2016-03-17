var pansionatApp = angular.module('pansionatApp', []);

pansionatApp.controller('PansListCrtl', function($scope, $http) {
	$scope.hotels = [];
	$http.get('/hotels.json').success(function(data, status, headers, config){
		$scope.hotels = data;
	})
})