hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $location, CommonResourcesFactory, EmployeeService) {

        EmployeeService.findAll().then(function(res) {
            $scope.employees = res.data;
        }, function(err) {
            console.log('An error occurred while finding all employees: ' + err.status);
        });

        $scope.view = function (employeeId) {
            $location.url('/employeeView/' + employeeId);
        };

        $scope.edit = function(employeeId) {
            $location.url('/employeeEdit/' + employeeId);
        };

        $scope.delete = function(employeeId) {
            EmployeeService.delete(employeeId).then(function() {
                alert('Succes: Employee has been deleted!');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting employee: ' + err.status);
            });
        };

    }]);