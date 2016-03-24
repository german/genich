var pansionatApp = angular.module('pansionatApp', ['ngAnimate']);

pansionatApp.controller('PansListCrtl', function($scope, $http) {
  $scope.hotels = [];
  $http.get('/hotels.json').success(function(data, status, headers, config){
    $scope.hotels = data;
  })

  $scope.qty = 100;
  $scope.mycolor = 'blue';

  // filters City
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

  //filters has_private_kitchen
  $scope.has_private_kitchenIncludes = [];
  $scope.includeshas_private_kitchen = function(has_private_kitchen){
    var i = $.inArray(has_private_kitchen, $scope.has_private_kitchenIncludes);
    if (i > -1) {
      $scope.has_private_kitchenIncludes.splice(i, 1);
    } else {
      $scope.has_private_kitchenIncludes.push(has_private_kitchen);
    }
  }

  $scope.haskitchenFilter = function(hotels) {
    if ($scope.has_private_kitchenIncludes.length > 0) {
      if ($.inArray(hotels.has_private_kitchen, $scope.has_private_kitchenIncludes) < 0)
        return;
        $('.kitchen').addClass('kitchen_active');
    } else {
      $('.kitchen').removeClass('kitchen_active');
    }
    return hotels;
  }

  //filters has_conditioning
  $scope.has_conditioningIncludes = [];
  $scope.includeshas_conditioning = function(has_conditioning){
    var i = $.inArray(has_conditioning, $scope.has_conditioningIncludes);
    if (i > -1) {
      $scope.has_conditioningIncludes.splice(i, 1);
    } else {
      $scope.has_conditioningIncludes.push(has_conditioning);
    }
  }

  $scope.hasairFilter = function(hotels) {
    if ($scope.has_conditioningIncludes.length > 0) {
      if ($.inArray(hotels.has_conditioning, $scope.has_conditioningIncludes) < 0)
        return;
        $('.air').addClass('air_active');
    } else {
      $('.air').removeClass('air_active');
    }
    return hotels;
  }

  //filter price_min
  $scope.minpriceFilter = function(hotels, qty, price_min) {
    return hotels.price_min <= $scope.qty
  }

  //sort price
  $scope.sortbyprice = undefined;
  $scope.reverse = false;
  $scope.sort = function(fieldName){
    if ($scope.sortbyprice === fieldName) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.sortbyprice = fieldName;
      $scope.reverse = false;
    }
  }

  //filter premium
  $scope.premiumFilter = function(hotels, has_parking) {
    return hotels.has_parking === true;
  }

  $scope.isSortUp = function(fieldName) {
    return $scope.sortbyprice === fieldName && $scope.reverse;
  };
  $scope.isSortDown = function(fieldName) {
    return $scope.sortbyprice === fieldName && !$scope.reverse;
  };

  
 })
