/**
 * Created by Cristina.Constantin on 7/24/2017.
 */
hrApp.controller('JobViewController', ['$scope', '$routeParams', '$location', 'JobService',
    function($scope, $routeParams, $location, JobService) {

        JobService.findOne($routeParams.jobId)
            .then(function(res) {
                $scope.job = res.data;
            }, function(err) {
                console.log('An error occurred while finding the employee: ' + err.status);
            });

        $scope.back = function() {
            $location.url('/jobList');
        };

    }]);
