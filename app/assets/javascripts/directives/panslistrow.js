angular
	.module('pansionatApp')
	.directive('panslistrow', function(){
		return {
			restrict: 'E',
			templateUrl: "assets/panslistrow.html"
			// '<div class="row">' +
   //        '<div class="col-md-12">' +
   //          '<div class="col-md-5">' +
   //            '<div class="panslist-thumb" ng-style="hotel.albums.length > 0 ? {'background': 'url({{hotel.albums[0].photos[0].photo.medium.url}}', 'background-size':'cover'} : {'background':'url(http:www.stat.colostate.edu/statpeople/images/photos/photo_not_available.png)', 'background-size':'cover'}">' +
   //            '</div>' +
   //          '</div>' +
   //          '<div class="col-md-7">' +
   //            '<p><span><h2><a href="#/hotels/{{hotel.id}}">{{hotel.name}}</a></h2></span></p>' +
   //            '<p><span><h4>{{hotel.city_name}}</h4></span></p>' +
   //            '{{hotel.price_min}}</br>' +
   //            '<button type="button" class="btn btn-primary btn-xs" ng-if="hotel.has_tv">TV</button>' +
   //            '<button type="button" class="btn btn-warning btn-xs" ng-if="hotel.has_parking">Парковка</button>' +
   //            '<button type="button" class="btn btn-success btn-xs" ng-if="hotel.has_private_kitchen">Кухня</button>' +
   //            '<button type="button" class="btn btn-info btn-xs" ng-if="hotel.has_conditioning">Кондиционер</button>' +
   //            '<button type="button" class="btn btn-primary btn-xs" ng-if="hotel.has_private_shower">Душ</button>' +
   //            '<button type="button" class="btn btn-warning btn-xs" ng-if="hotel.has_wifi">Wi-Fi</button>' +
   //            '<button type="button" class="btn btn-danger btn-xs" ng-if="hotel.has_transfer">Трансфер</button>' +
   //          '</div>' +
   //        '</div>' +
   //      '</div>',
		}
	})