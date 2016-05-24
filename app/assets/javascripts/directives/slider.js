angular
	.module('pansionatApp')
	.directive('slider', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/html/slider.html"
		}
	})