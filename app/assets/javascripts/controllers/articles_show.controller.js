angular.module('pansionatApp').controller('ArticlesShowCtrl', 
  ['$scope', '$http', 'Article', '$state', '$stateParams', 
  'fileUpload', ArticlesShowCtrl]);

function ArticlesShowCtrl($scope, $http, Article, $state, $stateParams, fileUpload){

  $http.defaults.headers.post['Accept'] = 'application/json, text/javascript'; 
  $http.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=utf-8';

  Article.get({id: $stateParams.id}, function(data){
    $scope.article = data;
  });

	$scope.article = new Article();

  $scope.addArticle = function(){
    var file = $scope.myFile;
    //console.log('file is ' );
    //console.dir(file);
    var uploadUrl = "/articles";
    fileUpload.uploadFileToUrl(file, $scope.article, uploadUrl);
  };
};
