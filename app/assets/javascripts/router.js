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
  'ng-token-auth', 
  'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$authProvider',
  function($stateProvider, $urlRouterProvider, $authProvider) {
    /*$authProvider.configure({
      apiUrl:                  '/users',
      tokenValidationPath:     '/users/validate_token',
      signOutUrl:              '/sign_out',
      emailRegistrationPath:   '/',
      emailSignInPath:         '/sign_in',
      accountUpdatePath:       '/',
      accountDeletePath:       '/',
    });*/

  $stateProvider
    .state('home', {
      url: '/', controller: 'MainController',
      templateUrl: 'hotels/index.html'
    }).state('hotel', {
      url: '/hotels/{id}', controller: 'HotelShow',
      templateUrl: 'hotels/show.html'
    }).state('new_hotel', {
      url: '/new',
      templateUrl: 'hotels/new.html',
      controller: 'NewHotel',
      /*resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }*/
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
    }).state('help', {
      url: '/help',
      templateUrl: 'help/help.html',
      controller: 'MainController'
    }).state('edit', {
      url: '/edit/{id}',
      templateUrl: 'hotels/edit.html',
      controller: 'HotelShow'
    })
  $urlRouterProvider.otherwise('/');
}]);

