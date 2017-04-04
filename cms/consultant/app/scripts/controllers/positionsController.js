angular.module('sbAdminApp')
.controller('positionsController', function ($scope) {

    var jd = [

       {client:'ABB',  position: 'Chief Technology Officer', status: true, priority:'open', jdStatus:'Accepted',location:'Mumbai',ctc:'7',score:'32', cv: '1', id: '1' },
       { client: 'IOCL', position: 'UI/UX Designer', status: true, priority: 'open', jdStatus: 'Rejected', location: 'Mumbai', ctc: '8', score: '22', cv: '1', id: '2' },
       { client: 'TCS', position: 'Java Developer', status: false, priority: 'open', jdStatus: 'Accepted', location: 'Chennai', ctc: '4', score: '17', cv: '0', id: '3' }
       
    ];
    $scope.jd = jd;

    $scope.printJobs = function (job) {
       
        console.log($scope.jd);
    }

});