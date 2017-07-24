/**
 * Created by Cristina.Constantin on 7/24/2017.
 */

hrApp.controller('DepartmentAddController', ['$scope', '$http', '$location', 'LocationService', 'DepartmentService',
    function($scope, $http, $location, LocationService, DepartmentService) {

        $scope.department = {};

        $scope.requiredErrorMessage = 'Please fill out this field';

        LocationService.findAll().then(function(res) {
            $scope.locations = res.data;
        }, function(err) {
            console.log('An error occurred while finding all locations: ' + err.status);
        });

        $scope.reset = function() {
            this.department = {};
        };

        $scope.save = function(department) {
            DepartmentService.add(department).then(function(res) {
                $scope.department = res.data;
                $location.url('/departmentView/' + $scope.department.departmentId);
            }, function(err) {
                console.log('An error occurred while adding department: ' + err.status);
            });
        };

    }]);
