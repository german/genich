angular.module('pansionatApp').controller('UserCtrl', 
  ['$scope', '$stateParams', 'User', '$http', '$localStorage', '$sessionStorage', '$auth', UserCtrl]);

function UserCtrl($scope, $stateParams, User, $http, $localStorage, $sessionStorage, $auth) {
  $http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  $auth.validateUser();
	$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));

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

  //myfav filter 
  $scope.myfav = function(hotels, myuser){
    //лажапетровна
    return $scope.myuser.id === hotels.id
  }
  //myhotels filter
  $scope.myhotels = function(hotels, myuser) {
    return $scope.myuser.id === hotels.user_id;
  }

  $scope.view_tab = 'tab1';
  $scope.changeTab = function(tab) {
    $scope.view_tab = tab;
  }
}
