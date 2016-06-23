angular.module('pansionatApp').controller('ArticlesShowCtrl', ArticlesShowCtrl);

function ArticlesShowCtrl($scope, $http, Article, $stateParams){

  Article.get({id: $stateParams.id}, function(data){
    $scope.article = data;
  });

	$scope.article = new Article();
  
  $scope.addArticle = function(){
    Article.save($scope.article, function(){
      console.log($scope.article);
      $state.go('articles_list');
    });
  }
};
