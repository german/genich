angular.module('pansionatApp', [
  'ngAnimate', 
  'ui.router', 
  'templates', 
  'ngMaterial', 
  'ksSwiper', 
  'ngStorage', 
  'ngResource', 
  'angularFileUpload', 
  'jkuri.gallery', 
  'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'hotels/index.html',
      controller: 'MainController'
    }).state('hotel', {
      url: '/hotels/{id}',
      templateUrl: 'hotels/show.html',
      controller: 'Show'
    }).state('new_hotel', {
      url: '/new',
      templateUrl: 'hotels/new.html',
      controller: 'NewHotel'
    }).state('premium', {
      url: '/premium',
      templateUrl: 'hotels/premium.html',
      controller: 'MainController'
    }).state('allhotels', {
      url: '/allhotels',
      templateUrl: 'hotels/allhotels.html',
      controller: 'MainController'
    }).state('albums', {
      url: '/albums/{id}',
      templateUrl: 'albums/show.html',
      controller: 'AlbumShow'
    }).state('login', {
      url: '/login',
      templateUrl: 'devise/sessions/new.html',
      controller: 'LoginCtrl'
    }).state('registration', {
      url: '/registration',
      templateUrl: 'devise/registration/new.html',
      controller: 'RegistrationCtrl'
    })
  $urlRouterProvider.otherwise('/');
}]);

