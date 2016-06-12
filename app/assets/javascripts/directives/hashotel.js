angular
	.module('pansionatApp')
	.directive('hashotel', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/html/hashotel.html"
		}
	})