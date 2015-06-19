angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LiveCtrl', function($scope) {})



// Map Controller
.controller('MapCtrl', function($scope) {
	var userMarkerShown = false;
	// Create a map in the #map div
	var map = L.map('map',
		{ zoomControl:false } // Zoom controls not needed for mobile
		);

	// Locate library used to get user's location
	map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
	.on('locationfound', function(e){
		if (userMarkerShown == true) {
			map.removeLayer(userMarker);
			userMarkerShown = false;
		}

		var userMarker = L.marker([e.latitude, e.longitude]).bindPopup('You are <b>alive</b>!');

		map.addLayer(userMarker);
		userMarkerShown = true;
	})
	.on('locationerror', function(e){
		console.log("Location access denied.");
		console.log(e);
	});




	  // add OpenStreetMap tile layer
	  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(map);
});
