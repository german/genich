var pansionatApp = angular.module('pansionatApp', ['ngAnimate', 'ngRoute']);
  

pansionatApp.controller('PansListCtrl', function($scope, $http, $route, $routeParams, $location) {
  $scope.hotels = [];
  $http.get('/hotels.json').success(function(data, status, headers, config){
    $scope.hotels = data;
  })

  pansionatApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/home', {templateUrl: 'index.html',   controller: PansListCtrl}).
                otherwise({redirectTo: '/home'});
  }]);

  pansionatApp.controller('newCtrl', function($scope, $routeParams) {
    $scope.name = "newCtrl";
    $scope.params = $routeParams;
  })
  
  $scope.qty = 100;
  $scope.mycolor = 'blue';

  //ALL MY FILTERS MASSIVE
  $scope.city_nameIncludes = [];
  $scope.has_tvIncludes = [];
  $scope.has_parkingIncludes = [];
  $scope.has_private_kitchenIncludes = [];
  $scope.has_conditioningIncludes = [];
  $scope.has_showerIncludes = [];
  $scope.has_wifiIncludes = [];
  $scope.has_transferIncludes = [];


  // filters City
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

  //filters has_shower
  $scope.includeshas_shower = function(has_shower){
    var i = $.inArray(has_shower, $scope.has_showerIncludes);
    if (i > -1) {
      $scope.has_showerIncludes.splice(i, 1);
    } else {
      $scope.has_showerIncludes.push(has_shower);
    }
  }
  $scope.hasshowerFilter = function(hotels) {
    if ($scope.has_showerIncludes.length > 0) {
      if ($.inArray(hotels.has_shower, $scope.has_showerIncludes) < 0)
        return;
        $('.shower').addClass('shower_active');
    } else {
      $('.shower').removeClass('shower_active');
    }
    return hotels;
  }

  //filters has_wifi
  $scope.includeshas_wifi = function(has_wifi){
    var i = $.inArray(has_wifi, $scope.has_wifiIncludes);
    if (i > -1) {
      $scope.has_wifiIncludes.splice(i, 1);
    } else {
      $scope.has_wifiIncludes.push(has_wifi);
    }
  }
  $scope.haswifiFilter = function(hotels) {
    if ($scope.has_wifiIncludes.length > 0) {
      if ($.inArray(hotels.has_wifi, $scope.has_wifiIncludes) < 0)
        return;
        $('.wi-fi').addClass('wi-fi_active');
    } else {
      $('.wi-fi').removeClass('wi-fi_active');
    }
    return hotels;
  }

  //filters has_transfer
  $scope.includeshas_transfer = function(has_transfer){
    var i = $.inArray(has_transfer, $scope.has_transferIncludes);
    if (i > -1) {
      $scope.has_transferIncludes.splice(i, 1);
    } else {
      $scope.has_transferIncludes.push(has_transfer);
    }
  }
  $scope.hastransferFilter = function(hotels) {
    if ($scope.has_transferIncludes.length > 0) {
      if ($.inArray(hotels.has_transfer, $scope.has_transferIncludes) < 0)
        return;
        $('.transfer').addClass('transfer_active');
    } else {
      $('.transfer').removeClass('transfer_active');
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
    return hotels.has_tv === true;
  }

  function shuffle (array) {
    var i = 0, j = 0, temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  //filter premium rendom functioun 
  $scope.random = function(hotels) {
    return shuffle(hotels);
  }

  $scope.isSortUp = function(fieldName) {
    return $scope.sortbyprice === fieldName && $scope.reverse;
  };
  $scope.isSortDown = function(fieldName) {
    return $scope.sortbyprice === fieldName && !$scope.reverse;
  };
 })
