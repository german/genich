angular.module('pansionatApp').controller('ArticlesIndexCtrl', 
  ['$scope', '$http', 'Article', '$stateParams', ArticlesIndexCtrl]);

function ArticlesIndexCtrl($scope, $http, Article, $stateParams) {
  Article.query(function(data){
    console.log('data', data);
    $scope.articles = data;
  })
};
