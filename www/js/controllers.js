angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LiveCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {})



// Map Controller
.controller('MapCtrl', function($scope) {
	// MAPS

	angular.extend($scope, {
		center: {
			autoDiscover: true
		}
	});


	var mainMarker = {
		lat: 51,
		lng: 0,
		focus: true,
		message: "Hey, drag me if you want",
		draggable: true
	};
	angular.extend($scope, {

		markers: {
			mainMarker: angular.copy(mainMarker)
		},
		position: {
			lat: 51,
			lng: 0
		}
	});


}, 'centerService', function ($scope, CenterService) {
	angular.extend($scope, {
		center: CenterService.center,
		bounds: {},
	})
});
