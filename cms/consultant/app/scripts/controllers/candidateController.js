angular.module('sbAdminApp')
.controller('candidateController', function ($scope, $stateParams) {

    $scope.candidateId = $stateParams.candidateId;
    $scope.jobId = $stateParams.jobId;
    //use job id to fetch the designation of job in blue box
    $scope.jobDesig = "Chief Technology Officer"

    //fetch data for candidate using this candidate id.
    $scope.candidate = { name: 'Yash', designation: 'Chief Technology Officer', currentCompany: 'ABPS solutions', phone: '9988776655', qualification: 'mba', experience: '6', email: 'yash95@gmail.com', currentCTC: '25', location: 'banglore', id: '1', time: '2:56 pm', score: '30', expectedCTC: '30', noticePeriod: '90', skillsMust: ['java', 'dotnet', 'sql', 'angularjs'], skillsOptional: ['photoshop', 'gamer'],status:"Awaiting Client Input"};

    //fetch data of comments using candidate id
    $scope.comments = [{ by: 'Interviewer', status: 'Interview Accepted', commentDetail: 'Not good performance' }, { by: 'Professor X', status: null, commentDetail: 'Okay' }, { by: 'HireX', status: 'Awaiting Client Input', commentDetail: null },
    { by: 'Interviewer', status: 'Interview Accepted', commentDetail: 'Not good performance' }, { by: 'HireX', status: 'Awaiting Candidate Input', commentDetail: null }];
        //by: retirve this username from login usser name

    $scope.username = "client";

    $scope.addComment = function () {


        if ($scope.inputComment) {

           
            
           
            var comment = new Object();  //new object made and pushed in comments array
            comment.by = $scope.username;
            comment.status = null;
            comment.commentDetail = $scope.inputComment;

            $scope.comments.push(comment);
            $scope.inputComment = "";
            document.getElementById('commentBox').focus();
            
           

        }

    }

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

        if (status == 'Confirm Interview' || status == 'Candidate Selected' || status == 'Candidate Joined' || status == 'Make Payment')
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
