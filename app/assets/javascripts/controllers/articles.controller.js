angular.module('pansionatApp').controller('ArticlesCtrl', ArticlesCtrl);
	function ArticlesCtrl($scope, $http, Article, $stateParams){
		Article.query(function(data){
      console.log('data', data);
			$scope.articles = data;
		})

    Article.get({id: $stateParams.id}, function(data){
      $scope.article = data;
    });

		$scope.article = new Article();
    
    $scope.addArticle = function(){
      Article.save($scope.article, function(){
        console.log($scope.article);
        window.location.reload();
      });
    }
	}
