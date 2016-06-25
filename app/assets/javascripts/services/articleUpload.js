angular.module('pansionatApp').
  service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, author, uploadUrl){
      var fd = new FormData();
      fd.append('article[picture]', file);
      fd.append('article[title]', author.title);
      fd.append('article[content]', author.content);
      fd.append('article[author]', author.author);

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .success(function(){
        alert('Статья успешно создана!');
      })
      .error(function(){
        alert('Произошла ошибка при создании статьи');
      });
  }
}]);