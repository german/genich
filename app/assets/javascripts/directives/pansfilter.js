angular
	.module('pansionatApp')
	.directive('pansfilter', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/html/pansfilter.html"
		}
	})