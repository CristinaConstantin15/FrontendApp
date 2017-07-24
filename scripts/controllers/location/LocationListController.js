/**
 * Created by Cristina.Constantin on 7/24/2017.
 */
hrApp.controller('LocationListController', ['$scope', '$http', '$route', '$location', 'LocationService',
    function($scope, $http, $route, $location, LocationService) {

        LocationService.findAll().then(function(res) {
            $scope.locations = res.data;
        }, function(err) {
            console.log('An error occurred while finding all locations: ' + err.status);
        });

        $scope.view = function(locationId) {
            $location.url('/locationView/' + locationId);
        };

        $scope.edit = function(locationId) {
            $location.url('/locationEdit/' + locationId);
        };


        $scope.delete = function(locationId) {
            LocationService.delete(locationId).then(function() {
                alert('Location has been deleted successfully');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting location: ' + err.status);
            });
        };

    }]);