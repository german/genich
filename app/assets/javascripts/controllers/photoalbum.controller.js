angular.module('pansionatApp').controller('PhotoalbumCtrl', 
  ['$scope', '$http', '$stateParams', PhotoalbumCtrl]);

function PhotoalbumCtrl($scope, $http, $stateParams) {
  
	var self = this;
  self.images = [
    {thumb: 'http://lorempixel.com/g/850/400', img: 'http://lorempixel.com/g/850/400'},
    {thumb: 'http://lorempixel.com/g/850/400/sports', img: 'http://lorempixel.com/g/850/400/sports'},
    {thumb: 'http://lorempixel.com/g/850/400/abstract', img: 'http://lorempixel.com/g/850/400'},
    {thumb: 'http://lorempixel.com/g/850/400/city', img: 'http://lorempixel.com/g/850/400'},
    {thumb: 'http://lorempixel.com/g/850/400/fashion', img: 'http://lorempixel.com/g/850/400'},
    {thumb: 'http://lorempixel.com/g/850/400/nature', img: 'http://lorempixel.com/g/850/400'}
  ];
  $scope.imagesmain = self.images;

}

