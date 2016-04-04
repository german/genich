angular.module('pansionatApp', ['ngAnimate', 'ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'hotels/index.html',
      controller: function($scope, $http) {
        $scope.hotels = [];
        $scope.ranked_hotels = [];
        $http.get('/hotels.json').success(function(data, status, headers, config){
          $scope.hotels = data;
          
          angular.forEach(data, function(item) {
            item.rank = 0.5 - Math.random();
            $scope.ranked_hotels.push(item);
          });
        })
      }
    }).state('hotel', {
      url: '/hotels/{id}',
      templateUrl: 'hotels/show.html',
      controller: function($scope, $stateParams,$http) {
        $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
          $scope.hotel = data;
        })
      }
    });

  $urlRouterProvider.otherwise('home');
}]);
