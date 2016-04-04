angular.module('pansionatApp', ['ngAnimate', 'ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
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
    }).state('hotels', {
      url: '/hotels/{id}',
      templateUrl: '/hotels.html',
      controller: function($scope, $stateParams,$http) {
        $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
          $scope.hotel = data;
        })
      }
    });

  $urlRouterProvider.otherwise('home');
}]);
