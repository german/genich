angular.module('pansionatApp').controller('ArticlesCtrl', ArticlesCtrl);
	function ArticlesCtrl($scope, $http, Article){
		Article.query(function(data){
      console.log('data', data);
			$scope.articles = data;
		})

		$scope.article = new Article();
    
    $scope.addArticle = function(){
      Customer.save($scope.article, function(){
        console.log($scope.article);
        window.location.reload();
      });
    }
	}
