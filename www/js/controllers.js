angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, MyTimer) {
	var userSpeed = 1;
	var chickenSpeed = 0.6;

	$scope.t = MyTimer(1000);


	// Launch plugin
	$("#example").ionRangeSlider({
	    type: "double",
	    min: 0,
	    max: 1000,
	    from: 200,
	    to: 500,
	    grid: true
	});

	// Saving it's instance to var
	var slider = $("#example").data("ionRangeSlider");



	$scope.setPosition = function() {
		// return ($scope.t.totalMilliseconds * userSpeed)/100;
		slider.update({
		    from: ($scope.t.totalMilliseconds * chickenSpeed)/100 - 20,
		    to: ($scope.t.totalMilliseconds * userSpeed)/100
		});
	};

	$scope.getMaxDistance = function() {
		return 100;
	};

	$scope.getMinDistance = function() {
		return 0;
	};





})

.controller('LiveCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {})


// Map Controller
.controller('MapCtrl', function($scope) {

});
