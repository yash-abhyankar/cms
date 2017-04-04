angular.module('sbAdminApp')
.controller('newCvController', function ($scope, $stateParams) {
    $scope.jobId = $stateParams.jdId;

    $scope.job =

       { position: 'Chief Technology Officer', status: 'Open', cv: '1', Location: 'Mumbai', minSalary: 21, maxSalary: 25, minExperience: 3, maxExperience: 5, vacancy: '1', id: '1', fromCompany: 'Network18', nature: 'Full Time' }
    ;

    $scope.candidate =
        {
            name:null,email:null,currrentCTC:null,designation:null,noticePeriod:null,highestQualification:null,mobileNumber:null,currentEmployer:null,currentLocation:null,expectedCTC:null,expYears:null,expMonths:null
        };
   
    $scope.print = function () {
        console.log($scope.candidate);
    }

});