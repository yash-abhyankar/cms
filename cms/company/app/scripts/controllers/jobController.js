angular.module('sbAdminApp')
.controller('jobController', function ($scope, $stateParams) {

    $scope.jobId = $stateParams.jobId;

    //call job from web api for given id in stateparams only

    $scope.job =

       { position: 'Chief Technology Officer', status: 'Open', cv: '1', jobLocation: 'Mumbai', salaryRange: '21-35 Lakhs', experience: '3-5 Years', vacancy: '1', id: '1' }
    ;


    $scope.candidates = [

        { name: 'Yash', designation: 'Chief Technology Officer', currentCompany: 'ABPS solutions', qualification: 'mba', experience: '6 Years', currentCTC: '25 Lakhs', location: 'banglore', id: '1', time: '2:56 pm', score: '30', status: "Awaiting Client Input" },
        { name: 'Ambarish', designation: 'Chief Technology Officer', currentCompany: 'atos solutions', qualification: 'btech', experience: '3 Years', currentCTC: '35 Lakhs', location: 'baroda', id: '2', time: '6:15pm', score: '23', status: "CV Shortlist" },

    ];
    $scope.stateA = ['CV Shortlist', 'CV on Hold', 'CV Reject', 'Duplicate CV'];
    $scope.stateB = ['Schedule Interview'];
    $scope.stateC = ['CV Shortlist', 'CV Reject'];
    $scope.stateD = ['Confirm Interview', 'Interview Reschedule', 'Candidate Backout'];
    $scope.stateE = ['Candidate Selected', 'Candidate Rejected'];
    $scope.stateF = ['Candidate Joined', 'Candidate Backout'];
    $scope.stateG = ['Payment Pending'];
    $scope.stateH = ['Interview Scheduled'];
    $scope.stateI = ['Make Payment'];

    $scope.checkPrimary = function (status) {

        if (status == 'CV Shortlist' || status == 'CV on Hold' || status == 'Interview Reschedule' || status == 'Schedule Interview' || status == 'Payment Pending' || status == 'Interview Scheduled' || status == 'Awaiting Client Input')
            return true;
        else
            return false;
    }


    $scope.checkSuccess = function (status) {

        if (status == 'Confirm Interview' || status == 'Candidate Selected' || status == 'Candidate Joined'  || status == 'Make Payment')
            return true;
        else
            return false;
    }

    $scope.checkDanger = function (status) {

        if (status == 'CV Reject' || status == 'Duplicate CV' || status == 'Candidate Rejected' || status == 'Candidate Backout')
            return true;
        else
            return false;
    }
    $scope.validate = function (c) {


        var date = document.getElementById("date" + c).value;
        var comment = document.getElementById("comment" + c).value;
        console.log(date);
        console.log(comment);
    }
  
});

 