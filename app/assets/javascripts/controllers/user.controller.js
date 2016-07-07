angular.module('pansionatApp').controller('UserCtrl', 
  ['$scope', '$stateParams', 'User', '$http', '$localStorage', '$sessionStorage', '$auth', 'Favorite', 'Hotel', UserCtrl]);

function UserCtrl($scope, $stateParams, User, $http, $localStorage, $sessionStorage, $auth, Favorite, Hotel) {
  $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  $auth.validateUser();
	//$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));
  Auth.currentUser().then(function (user){
    $scope.myuser = user;
  });

	$scope.updateUser = function(myuser_id) {
    var user_params = {id: myuser_id, user: {
        email: $scope.myuser.email, 
        current_password: $scope.myuser.current_password,
        password: $scope.myuser.password
      } 
    }

  	User.update(user_params, function(response) {
    	console.log(response);
  	})
	}

  Favorite.query({user_id: $scope.myuser.id}, function(response){
    console.log('fav', response);
    $scope.favorites = [];
    angular.forEach(response, function(favorite) {
      Hotel.get({id: favorite.hotel_id}, function(resp){
        $scope.favorites.push(resp);
      })
    })
  });

  //myhotels filter
  $scope.myhotels = function(hotels, myuser) {
    return $scope.myuser.id === hotels.user_id;
  }

  $scope.view_tab = 'tab1';
  $scope.changeTab = function(tab) {
    $scope.view_tab = tab;
  }
}
