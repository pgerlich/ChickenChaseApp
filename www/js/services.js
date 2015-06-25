angular.module('starter.services', [])


.service('CenterService', [
    '$location',
    'localStorageService',
    function CenterService ($location, localStorageService) {
        var Service = {
            center: {}
        };
        var locationParameters = $location.search();

        // Get center from url if available ...
        if(locationParameters.initLng !== undefined && !isNaN(parseFloat(locationParameters.initLng))
            && locationParameters.initLat !== undefined && !isNaN(parseFloat(locationParameters.initLat))
            && locationParameters.initZoom !== undefined && !isNaN(parseInt(locationParameters.initZoom))) {
            Service.center =  {
                lat: parseFloat(locationParameters.initLat),
                lng: parseFloat(locationParameters.initLng),
                zoom: parseInt(locationParameters.initZoom),
                autoDiscover: false,
            }
        } else {
            if(localStorageService.keys().indexOf('center') > -1) {
                // ... or from localStorage ...
                Service.center = localStorageService.get('center');
            } else {
                // ... or else from the configuration
                Service.center = MapConfig.map.center;  
            }
        }

        Service.save = function(center){
            center.lat = parseFloat(center.lat);
            center.lng = parseFloat(center.lng);
            localStorageService.set('center', center);
            angular.extend(Service.center, center);
            console.log(center);
        }

        return Service
    }
    ]);

