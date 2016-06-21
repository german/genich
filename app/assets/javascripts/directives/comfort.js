angular
	.module('pansionatApp')
	.directive('comfort', function(){
		return {
			restrict: 'E',
			template: 
			'<div class="comfort">'+
          '<h3>Удобства</h3>' +
          '<label class="tv" ng-class="{\'tv_one\': tvActiveClass, \'tv_active\': !tvActiveClass}" ng-click="includesHas_tv(true); tvActiveClass = !tvActiveClass" ><img src="/assets/icon/technology.png" title="Телевизор в номере"> <span>Телевизор</span> </label>' +
          '<label class="parking" ng-class="{\'parking_one\': parkingActiveClass, \'parking_active\': !parkingActiveClass}" ng-click="includesHas_parking(true); parkingActiveClass = !parkingActiveClass"><img src="/assets/icon/parking.png"> <span>Парковка</span> </label>' +
          '<label class="kitchen" ng-class="{\'kitchen_one\': kitchenActiveClass, \'kitchen_active\': !kitchenActiveClass}" ng-click="includeshas_private_kitchen(true); kitchenActiveClass = !kitchenActiveClass"><img src="/assets/icon/kitchen.png"> <span>Кухня</span> </label>' +
          '<label class="food" ng-class="{\'food_one\': foodActiveClass, \'food_active\': !foodActiveClass}" ng-click="includeshas_food(true); foodActiveClass = !foodActiveClass"><img src="/assets/icon/food.png"> <span>Питание</span> </label>' +
          '<label class="fridge" ng-class="{\'fridge_one\': fridgeActiveClass, \'fridge_active\': !fridgeActiveClass}" ng-click="includeshas_fridge(true); fridgeActiveClass = !fridgeActiveClass"><img src="/assets/icon/fridge.png"> <span>Холодильник</span> </label>' +
          '<label class="kettle" ng-class="{\'kettle_one\': kettleActiveClass, \'kettle_active\': !kettleActiveClass}" ng-click="includeshas_kettle(true); kettleActiveClass = !kettleActiveClass"><img src="/assets/icon/kettle.png"> <span>Чайник</span> </label>' +
          '<label class="air" ng-class="{\'air_one\': airActiveClass, \'air_active\': !airActiveClass}" ng-click="includeshas_conditioning(true);airActiveClass = !airActiveClass"><img src="/assets/icon/conditioning.png"> <span>Кондиционер</span> </label>' +
          '<label class="laundry" ng-class="{\'laundry_one\': laundryActiveClass, \'laundry_active\': !laundryActiveClass}" ng-click="includeshas_laundry(true); laundryActiveClass = !laundryActiveClass"><img src="/assets/icon/laundry.png"> <span>Стирка</span> </label>' +
          '<label class="shower" ng-class="{\'shower_one\': showerActiveClass, \'shower_active\': !showerActiveClass}" ng-click="includeshas_shower(true);showerActiveClass = !showerActiveClass"><img src="/assets/icon/shower.png"> <span>Душ</span> </label>' +
          '<label class="wi-fi" ng-class="{\'wi-fi_one\': WifiActiveClass, \'wi-fi_active\': !WifiActiveClass}" ng-click="includeshas_wifi(true);WifiActiveClass = !WifiActiveClass"><img src="/assets/icon/wi-fi.png"> <span>Wi-Fi</span> </label>' +
          '<label class="delivery" ng-class="{\'delivery_one\': deliveryActiveClass, \'delivery_active\': !deliveryActiveClass}" ng-click="includeshas_transfer(true);deliveryActiveClass = !deliveryActiveClass"><img src="/assets/icon/delivery.png"> <span>Трансфер</span> </label>' +
          '<label class="pool" ng-class="{\'pool_one\': poolActiveClass, \'pool_active\': !poolActiveClass}" ng-click="includeshas_pool(true);poolActiveClass = !poolActiveClass"><img src="/assets/icon/pool.png"> <span>Бассейн</span> </label>' +
          '<label class="sunbeds" ng-class="{\'sunbeds_one\': sunbedsActiveClass, \'sunbeds_active\': !sunbedsActiveClass}" ng-click="includeshas_sunbeds(true);sunbedsActiveClass = !sunbedsActiveClass"><img src="/assets/icon/sunbeds.png"> <span>Лежаки/Зонтики</span> </label>' +
          '<label class="playground" ng-class="{\'playground_one\': playgroundActiveClass, \'playground_active\': !playgroundActiveClass}" ng-click="includeshas_playground(true);playgroundActiveClass = !playgroundActiveClass"><img src="/assets/icon/playground.png"> <span>Детская площадка</span> </label>' +
        '</div>',
		}
	})