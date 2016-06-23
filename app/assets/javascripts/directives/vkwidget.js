angular
	.module('pansionatApp')
	.directive('vkwidget', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/html/vkwidget.html"
		}
	})