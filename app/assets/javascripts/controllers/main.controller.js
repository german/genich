angular.module('pansionatApp').controller('MainController', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', MainController]);

function MainController($scope, $http, $localStorage, $sessionStorage, Auth) {
  $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $scope.hotels = [];
  $scope.ranked_hotels = [];

  $http.get('/hotels.json').success(function(data, status, headers, config){
    $scope.hotels = data;
    angular.forEach(data, function(item) {
      item.rank = 0.5 - Math.random();
      $scope.ranked_hotels.push(item);
    });
  });

  $scope.$on('$viewContentLoaded', 
    function(event){
      Auth.currentUser().then(function (user){
        $scope.myuser = user;
        console.log('$scope.myuser1', $scope.myuser);
        init();
      });
  });

  $scope.width = function(clientWidth){
   return document.body.clientWidth;    
  }
        
  $scope.images = [
    
    {image : '/assets/slider/slider-02.jpg'},
    
    {image : '/assets/slider/slider-04.jpg'},
    
  ]
        
        $scope.swiper = {};
        $scope.next = function() {
            $scope.swiper.slideNext();
        };
        $scope.prev = function() {
          $scope.swiper.slidePrev();
        };
        
        $scope.$storage = $sessionStorage;


        //Buttons click
        $scope.tvActiveClass = true;
        $scope.parkingActiveClass = true;
        $scope.kitchenActiveClass = true;
        $scope.airActiveClass = true;
        $scope.showerActiveClass = true;
        $scope.WifiActiveClass = true;
        $scope.deliveryActiveClass = true;
        $scope.poolActiveClass = true;        
        $scope.foodActiveClass = true;
        $scope.kettleActiveClass = true;
        $scope.playgroundActiveClass = true;
        $scope.sunbedsActiveClass = true;
        $scope.fridgeActiveClass = true;
        $scope.laundryActiveClass = true;

        //
        $scope.qty = 10000;
        $scope.mycolor = 'blue';
        

        //ALL MY FILTERS MASSIVE
        $scope.city_nameIncludes = [];
        $scope.typeIncludes = [];
        $scope.has_tvIncludes = [];
        $scope.has_parkingIncludes = [];
        $scope.has_private_kitchenIncludes = [];
        $scope.has_conditioningIncludes = [];
        $scope.has_showerIncludes = [];
        $scope.has_wifiIncludes = [];
        $scope.has_transferIncludes = [];
        $scope.has_poolIncludes = [];
        $scope.has_foodIncludes = [];
        $scope.has_kettleIncludes = [];
        $scope.has_playgroundIncludes = [];
        $scope.has_sunbedsIncludes = [];
        $scope.has_fridgeIncludes = [];
        $scope.has_laundryIncludes = [];

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

        // filter Type 
        $scope.includesType = function(hotel_type){
          var i = $.inArray(hotel_type, $scope.typeIncludes);
          if (i > -1) {
            $scope.typeIncludes.splice(i, 1);
          } else {
            $scope.typeIncludes.push(hotel_type);
          }
        }
        $scope.typeFilter = function(hotels) {
          if ($scope.typeIncludes.length > 0) {
            if ($.inArray(hotels.hotel_type, $scope.typeIncludes) < 0)
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
          } 
          return hotels;
        }

        //filters has_private_shower
        $scope.includeshas_shower = function(has_private_shower){
          var i = $.inArray(has_private_shower, $scope.has_showerIncludes);
          if (i > -1) {
            $scope.has_showerIncludes.splice(i, 1);
          } else {
            $scope.has_showerIncludes.push(has_private_shower);
          }
        }
        $scope.hasshowerFilter = function(hotels) {
          if ($scope.has_showerIncludes.length > 0) {
            if ($.inArray(hotels.has_private_shower, $scope.has_showerIncludes) < 0)
              return;
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
          } 
          return hotels;
        }

        //filters has_pool
        $scope.includeshas_pool = function(has_pool){
          var i = $.inArray(has_pool, $scope.has_poolIncludes);
          if (i > -1) {
            $scope.has_poolIncludes.splice(i, 1);
          } else {
            $scope.has_poolIncludes.push(has_pool);
          }
        }
        $scope.haspoolFilter = function(hotels) {
          if ($scope.has_poolIncludes.length > 0) {
            if ($.inArray(hotels.has_pool, $scope.has_poolIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_food
        $scope.includeshas_food = function(has_food){
          var i = $.inArray(has_food, $scope.has_foodIncludes);
          if (i > -1) {
            $scope.has_foodIncludes.splice(i, 1);
          } else {
            $scope.has_foodIncludes.push(has_food);
          }
        }
        $scope.hasfoodFilter = function(hotels) {
          if ($scope.has_foodIncludes.length > 0) {
            if ($.inArray(hotels.has_food, $scope.has_foodIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_kettle
        $scope.includeshas_kettle = function(has_kettle){
          var i = $.inArray(has_kettle, $scope.has_kettleIncludes);
          if (i > -1) {
            $scope.has_kettleIncludes.splice(i, 1);
          } else {
            $scope.has_kettleIncludes.push(has_kettle);
          }
        }
        $scope.haskettleFilter = function(hotels) {
          if ($scope.has_kettleIncludes.length > 0) {
            if ($.inArray(hotels.has_kettle, $scope.has_kettleIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_playground
        $scope.includeshas_playground = function(has_playground){
          var i = $.inArray(has_playground, $scope.has_playgroundIncludes);
          if (i > -1) {
            $scope.has_playgroundIncludes.splice(i, 1);
          } else {
            $scope.has_playgroundIncludes.push(has_playground);
          }
        }
        $scope.hasplaygroundFilter = function(hotels) {
          if ($scope.has_playgroundIncludes.length > 0) {
            if ($.inArray(hotels.has_playground, $scope.has_playgroundIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_sunbeds
        $scope.includeshas_sunbeds = function(has_sunbeds){
          var i = $.inArray(has_sunbeds, $scope.has_sunbedsIncludes);
          if (i > -1) {
            $scope.has_sunbedsIncludes.splice(i, 1);
          } else {
            $scope.has_sunbedsIncludes.push(has_sunbeds);
          }
        }
        $scope.hassunbedsFilter = function(hotels) {
          if ($scope.has_sunbedsIncludes.length > 0) {
            if ($.inArray(hotels.has_sunbeds, $scope.has_sunbedsIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_fridge
        $scope.includeshas_fridge = function(has_fridge){
          var i = $.inArray(has_fridge, $scope.has_fridgeIncludes);
          if (i > -1) {
            $scope.has_fridgeIncludes.splice(i, 1);
          } else {
            $scope.has_fridgeIncludes.push(has_fridge);
          }
        }
        $scope.hasfridgeFilter = function(hotels) {
          if ($scope.has_fridgeIncludes.length > 0) {
            if ($.inArray(hotels.has_fridge, $scope.has_fridgeIncludes) < 0)
              return;
          } 
          return hotels;
        }

        //filters has_laundry
        $scope.includeshas_laundry = function(has_laundry){
          var i = $.inArray(has_laundry, $scope.has_laundryIncludes);
          if (i > -1) {
            $scope.has_laundryIncludes.splice(i, 1);
          } else {
            $scope.has_laundryIncludes.push(has_laundry);
          }
        }
        $scope.haslaundryFilter = function(hotels) {
          if ($scope.has_laundryIncludes.length > 0) {
            if ($.inArray(hotels.has_laundry, $scope.has_laundryIncludes) < 0)
              return;
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

        $scope.isSortUp = function(fieldName) {
          return $scope.sortbyprice === fieldName && $scope.reverse;
        };
        $scope.isSortDown = function(fieldName) {
          return $scope.sortbyprice === fieldName && !$scope.reverse;
        };
      };
