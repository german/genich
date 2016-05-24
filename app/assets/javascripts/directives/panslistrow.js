angular
	.module('pansionatApp')
	.directive('panslistrow', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/html/panslistrow.html"
		}
	})