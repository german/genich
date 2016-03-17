var pansionatApp = angular.module('pansionatApp', []);

pansionatApp.controller('PansListCrtl', function($scope, $http) {
  $scope.hotels = [];
  $http.get('/hotels.json').success(function(data, status, headers, config){
    $scope.hotels = data;
  })

  // filters
  $scope.city_nameIncludes = [];
  $scope.includesCity_name = function(city_name){
    var i = $.inArray(city_name, $scope.city_nameIncludes);
    if (i > -1) {
      $scope.city_nameIncludes.splice(i, 1);
    } else {
      $scope.city_nameIncludes.push(city_name);
    }
  }

  $scope.citynameFilter = function(hotels) {
    if ($scope.city_nameIncludes.length > 0) {
      if ($.inArray(hotels.city_name, $scope.city_nameIncludes) < 0)
        return;
    }
    return hotels;
  }
})
