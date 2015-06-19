angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LiveCtrl', function($scope) {})

.controller('MapCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
