/**
 * Created by Cristina.Constantin on 7/24/2017.
 */
hrApp.controller('DepartmentListController', ['$scope', '$http', '$route', '$location', 'DepartmentService',
    function($scope, $http, $route, $location, DepartmentService) {

        DepartmentService.findAll().then(function(res) {
            $scope.departments = res.data;
        }, function(err) {
            console.log('An error occurred while finding all departments: ' + err.status);
        });

        $scope.view = function(departmentId) {
            $location.url('/departmentView/' + departmentId);
        };

        $scope.edit = function(departmentId) {
            $location.url('/departmentEdit/' + departmentId);
        };

        $scope.delete = function(departmentId) {
            DepartmentService.delete(departmentId).then(function() {
                alert('Department has been deleted successfully');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting department: ' + err.status);
            });
        };

    }]);