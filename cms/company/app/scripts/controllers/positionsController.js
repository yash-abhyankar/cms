angular.module('sbAdminApp')
.controller('positionsController', function ($scope) {

    var jd = [

       { position: 'Chief Technology Officer', status: true, cv: '1', id: '1' },
       { position: 'UI/UX Designer', status:true, cv: '1', id: '2' },
       { position: 'Java Developer', status:false, cv: '0', id: '3' }
       
    ];
    $scope.jd = jd;

    $scope.printJobs = function (job) {
       
        console.log($scope.jd);
    }

});