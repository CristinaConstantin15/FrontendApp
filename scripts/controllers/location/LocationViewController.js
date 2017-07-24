/**
 * Created by Cristina.Constantin on 7/24/2017.
 */

hrApp.controller('LocationViewController', ['$scope', '$http', '$routeParams', '$location', 'LocationService',
    function($scope, $http, $routeParams, $location, LocationService) {

        LocationService.findOne($routeParams.locationId)
            .then(function(res) {
                $scope.location = res.data;
            }, function(err) {
                console.log('An error occurred while finding the location: ' + err.status);
            });

        $scope.back = function() {
            $location.url('/locationList');
        };

    }]);