angular.module('pansionatApp', ['ngAnimate', 'ui.router', 'templates', 'ngMaterial', 'ksSwiper', 'ngStorage', 'ngResource'])
.factory('Album', function($resource) {
  return $resource('http://localhost:3000/hotels/:hotel_id/albums/:id', 
    { 
      hotel_id: '@hotel_id',
      id: '@id'
    },
  {
   'update': { method: 'PUT'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})
.factory('Photo', function($resource) {
  return $resource ('http://localhost:3000/albums/:album_id/photos/:id',
    {
      album_id: '@album_id',
      id: '@id' 
    },
    {
      'update': { method: 'PUT'},
      'save': { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }
  });
})
.controller('Show', function($scope, $stateParams,$http, $state, Album) {
  $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.hotel = data;
  });

  $scope.newAlbum  = new Album({hotel_id: $stateParams.id});


  $scope.save = function() {
    Album.save({ hotel_id: $stateParams.id, album: $scope.newAlbum }, function(response) {
      console.log(response);
      $state.go('hotel', {id: $stateParams.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
})
.controller('Main', function($scope, $http, $localStorage, $sessionStorage) {
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
            init();
        });

        $scope.images = [
          {image : '/assets/slider/slider-01.jpg'},
          {image : '/assets/slider/slider-02.jpg'},
          {image : '/assets/slider/slider-03.jpg'},
          {image : '/assets/slider/slider-04.jpg'},
          {image : 'http://jrmk.net/im/ac6/5aa/1cc/d5b27597a0b15e6cf4e9fa8-2.jpg'},
          {image : 'http://fakty.ictv.ua/images/gallery/2015/05/22/20150522142530.jpg'},
          {image : 'http://turuturu.ru/files/ckeditor/cd/14/82/1801.jpg'},
          {image : 'http://pilipenkotour.at.ua/Krim/pljazh.jpg'}
        ]
        
        $scope.swiper = {};
        $scope.next = function() {
            $scope.swiper.slideNext();
        };
        $scope.prev = function() {
          $scope.swiper.slidePrev();
        };
        
        $scope.$storage = $localStorage;

        //Buttons click
        $scope.tvActiveClass = true;
        $scope.parkingActiveClass = true;
        $scope.kitchenActiveClass = true;
        $scope.airActiveClass = true;
        $scope.showerActiveClass = true;
        $scope.WifiActiveClass = true;
        $scope.deliveryActiveClass = true;
        //
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
      })
.factory('Hotel', function($resource) {
  return $resource('http://localhost:3000/hotels/:id', { id: '@id'},
  {
   'update': { method: 'PUT'},
   'save': { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  });
})
.controller('New', function($scope, $http, $state, Hotel) {
  //$scope.newHotel  = new Hotel();

  $scope.save = function() {
    Hotel.save({ hotel: $scope.hotel }, function(response) {
      console.log(response);
      $state.go('hotel', {id: response.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
})
.controller('AlbumShow', function($scope, $stateParams,$http, $state, Album, Photo) {
  $http.get('/albums/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.album = data;
  });

  $scope.newPhoto  = new Photo({album_id: $stateParams.id});

  $scope.save = function() {
    Photo.save({ album_id: $stateParams.id }, function(response) {
      console.log(response);
      $state.go('albums', {id: response.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
})
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'hotels/index.html',
      controller: 'Main'
    }).state('hotel', {
      url: '/hotels/{id}',
      templateUrl: 'hotels/show.html',
      controller: 'Show'
    }).state('new', {
      url: '/new',
      templateUrl: 'hotels/new.html',
      controller: 'New'
    }).state('premium', {
      url: '/premium',
      templateUrl: 'hotels/premium.html',
      controller: 'Main'
    }).state('allhotels', {
      url: '/allhotels',
      templateUrl: 'hotels/allhotels.html',
      controller: 'Main'
    }).state('albums', {
      url: '/albums/{id}',
      templateUrl: 'albums/show.html',
      controller: 'AlbumShow'
    })
  $urlRouterProvider.otherwise('/');
}]);

