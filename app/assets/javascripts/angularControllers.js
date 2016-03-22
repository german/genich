var pansionatApp = angular.module('pansionatApp', ['ngAnimate']);

pansionatApp.controller('PansListCrtl', function($scope, $http) {
  $scope.hotels = [];
  $http.get('/hotels.json').success(function(data, status, headers, config){
    $scope.hotels = data;
  })

  $scope.qty = 100;

  // filters Sity
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

  //filters has_tv
  $scope.has_tvIncludes = [];
  $scope.includesHas_tv = function(has_tv){
    var i = $.inArray(has_tv, $scope.has_tvIncludes);
    if (i > -1) {
      $scope.has_tvIncludes.splice(i, 1);
    } else {
      $scope.has_tvIncludes.push(has_tv);
    }
  }

  $scope.hastvFilter = function(hotels) {
    if ($scope.has_tvIncludes.length > 0) {
      if ($.inArray(hotels.has_tv, $scope.has_tvIncludes) < 0)
        return;
        $('.tv').addClass('tv_active');
    } else {
      $('.tv').removeClass('tv_active');
    }
    return hotels;
  }

  //filters has_parking
  $scope.has_parkingIncludes = [];
  $scope.includesHas_parking = function(has_parking){
    var i = $.inArray(has_parking, $scope.has_parkingIncludes);
    if (i > -1) {
      $scope.has_parkingIncludes.splice(i, 1);
    } else {
      $scope.has_parkingIncludes.push(has_parking);
    }
  }

  $scope.hasparkingFilter = function(hotels) {
    if ($scope.has_parkingIncludes.length > 0) {
      if ($.inArray(hotels.has_parking, $scope.has_parkingIncludes) < 0)
        return;
        $('.parking').addClass('parking_active');
    } else {
      $('.parking').removeClass('parking_active');
    }
    return hotels;
  }

  //посмотри что выводит в консоль, 
  $scope.hotels_within_price_max = [];
  $scope.price_maxHotels = function(price_max){
    var i = $.inArray(price_max, $scope.hotels_within_price_max);
    console.log(i);
    if (i > -1) {
      $scope.hotels_within_price_max.splice(i, 1);
      
    } else {
      $scope.hotels_within_price_max.push(price_max);
      
    }
  }
  $scope.maxpriceFilter = function(hotels, qty, price_max) {
     for(var i = 0; i < $scope.hotels.length; i++){
      if($scope.qty > $scope.hotels[i].price_max) {
        $scope.hotels_within_price_max.push($scope.hotels[i]);
        return
      }

    }
  }

  
 })
