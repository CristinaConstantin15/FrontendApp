/**
 * Created by Cristina.Constantin on 7/3/2017.
 */

hrApp.controller('JobListController', ['$scope', '$http', '$route', '$location', 'JobService',
    function($scope, $http, $route, $location, JobService) {

        JobService.findAll().then(function(res) {
            $scope.jobs = res.data;
        }, function(err) {
            console.log('An error occurred while finding all jobs: ' + err.status);
        });

        $scope.view = function(jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.edit = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

        $scope.delete = function(jobId) {
            JobService.delete(jobId).then(function() {
                alert('Succes: Job has been deleted!');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting job: ' + err.status);
            });
        };
    }]);
