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
	    grid: true
	});

	// Saving it's instance to var
	$scope.slider = $("#example").data("ionRangeSlider");

	$scope.slider.update({
		    from: ($scope.t.totalMilliseconds * chickenSpeed)/100 - 20,
		    to: ($scope.t.totalMilliseconds * userSpeed)/100
		});



	$scope.setPosition = function() {
		// return ($scope.t.totalMilliseconds * userSpeed)/100;
		$scope.slider.update({
			from: ($scope.t.totalMilliseconds * chickenSpeed)/100 - 20,
			to: ($scope.t.totalMilliseconds * userSpeed)/100
		});
	};

	// Run function every second
	setInterval($scope.setPosition, 100);
})

.controller('LiveCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {})


// Map Controller
.controller('LoginCtrl', function($scope) {

});
