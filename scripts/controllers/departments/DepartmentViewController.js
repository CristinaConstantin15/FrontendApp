/**
 * Created by Cristina.Constantin on 7/24/2017.
 */
hrApp.controller('DepartmentViewController', ['$scope', '$http', '$routeParams', '$location', 'DepartmentService',
    function($scope, $http, $routeParams, $location, DepartmentService) {

        DepartmentService.findOne($routeParams.departmentId)
            .then(function(res) {
                $scope.department = res.data;
            }, function(err) {
                console.log('An error occurred while finding the department: ' + err.status);
            });

        $scope.back = function() {
            $location.url('/departmentList');
        };

    }]);