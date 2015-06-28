angular.module('starter.services', [])

.factory('MyTimer', function($interval){
    return function(delay){
        var initialMs= (new Date()).getTime();
        var result = {totalMilliseconds:0, counts:0};                
        $interval(function() {
            result.totalMilliseconds = (new Date()).getTime() - initialMs;
            result.counts++;
        }, delay);
        return result;
    };
 }


);

