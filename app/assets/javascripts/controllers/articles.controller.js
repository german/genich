angular.module('pansionatApp').controller('ArticlesCtrl', ArticlesCtrl);
	function ArticlesCtrl($scope, $http, Articles){
		Articles.query({},function(data){
			$scope.articles = data;
		})

		$scope.article = new Articles();
    $scope.addArticle = function(){
      Customer.save($scope.article, function(){
        console.log($scope.article);
        window.location.reload();
      });
    }
	}