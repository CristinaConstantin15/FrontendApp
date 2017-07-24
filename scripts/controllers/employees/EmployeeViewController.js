hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, EmployeeService) {

        EmployeeService.findOne($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error in find this employee: " + err);
            });

        $scope.back = function () {
            $location.url('/employeeList');
        }
    }]);