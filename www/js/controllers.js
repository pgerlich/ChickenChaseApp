angular.module('starter.controllers', ['starter.services', 'ngOpenFB'])

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
.controller('LoginCtrl', function($scope, $ionicModal, $timeout, ngFB, $http) {
	//Facebook login response
	$scope.facebookResponse = "";
	
	$scope.curEmail = "";
	$scope.curPassword = "";
	$scope.fbToken = "";
	$scope.fbuserid = "";
	
	$scope.loginLocal = function () {
		$scope.loginWithServer();
	};
	
	//Log user in to facebook
	$scope.fbLogin = function () {
		ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
			function (response) {
				if (response.status === 'connected') {
					//Set response objects
					$scope.facebookResponse = response;
					$scope.facebookToken = response.authResponse.accessToken;
					$scope.fbuserid = response.authResponse.userID;
					
					//Test alert
					alert("logged in: " + response.authResponse.accessToken)
					
					$scope.loginWithServer();
						
					//reroute to logged in page
				} else if(response.status ==='not_authorized' ){
					//Unregistered
					alert('new user');
				} else {
					alert('Facebook login failed');
					//failed
				}
			});
	};
	
	$scope.loginWithServer = function () {
		//Now do login stuff
		
		//TODO: Deploy to elastic bean stalk, test login and finish login portions
		
		$http.post('http://localhost:3000/users/login', buildDto())
		.success(function(response) {
				alert(response);
			}, function() {
				alert("FIXME: ADD TOASTER");
			});		
	}
	
	function buildDto() {
		return {
			email : $scope.curEmail,
			pass : $scope.curPassword,
			fbuserid : $scope.fbuserid,
			fbtoken: $scope.fbtoken
		};
	}
	
});
