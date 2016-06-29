angular.module('pansionatApp').run(function(editableOptions){editableOptions.theme = 'bs3'})
.controller('HotelShow', ['$scope', '$stateParams',
    '$http', '$state', 'Auth', 'Album', 'Hotel', 'Review', 'Favorite',  HotelShow]);

function HotelShow($scope, $stateParams, $http, $state, Auth, Album, Hotel, Review, Favorite) {
  //$scope.myuser = JSON.parse(window.localStorage.getItem('currentUser'));
  Auth.currentUser().then(function (user){
    $scope.myuser = user;
    check_is_hotel_in_favorites();
  });

  var self = this;
  self.images = [];

  $http.get('/hotels/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.hotel = data;

    // existing album (first one) to be edited
    $scope.edit_album = data.albums[0];

    if($scope.hotel.albums.length > 0) {
      $.each($scope.hotel.albums[0].photos, function(index, photo) {
        //console.log(photo);
        self.images.push({thumb: photo.photo.medium.url, img: photo.photo.url, desciption: photo.photo.name})
      });
    }
  });

  $scope.newAlbum  = new Album({hotel_id: $stateParams.id});

  $scope.save = function() {
    Album.save({ hotel_id: $stateParams.id, album: $scope.newAlbum }, function(response) {
      console.log(response);
      $state.go('albums', {id: response.id});
      // $state.go('hotel', {id: $stateParams.id})
      // Optional function. Clear html form, redirect or whatever.
    });
  };
  
  $scope.updateAlbumname = function(album_id) {
    Album.update({id: album_id, album: {name: $scope.edit_album.name} }, function(response) {
      console.log(response);
    })
  };

  $scope.newReview  = new Review({hotel_id: $stateParams.id});

  $scope.save_review = function() {
    Review.save({ hotel_id: $stateParams.id, review: $scope.newReview,  }, function(response) {
      console.log(response);
      window.location.reload();
      $state.go('hotel', {id: $stateParams.id})
    });
  };

  
  $scope.fav = function(hotel_id){
    Favorite.save({user_id: $scope.myuser.id, hotel_id: hotel_id}, 
      function(response) {
        console.log(response);
        alert('Этот пансионат добавлен в ваши закладки!');
      }
    )
  }

  $scope.delfav = function(fav_id){
    Favorite.delete({id: fav_id}, function(response) {
      console.log(response);
      alert('Успешно удалено из избранного!');
    })
  }

  $scope.show_add_to_favorites_btn = true;

  function check_is_hotel_in_favorites() {
    Favorite.query({user_id: $scope.myuser.id}, function(favs) {
      $.map(favs, function(fav) {
        if(fav.hotel_id == $stateParams.id) {
          $scope.show_add_to_favorites_btn = false;
          $scope.favorite_id = fav.id;
        }
      });
    });
  }
};
