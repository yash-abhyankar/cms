angular.module('sbAdminApp')
.controller('viewJdController', function ($scope, $stateParams) {

    $scope.jdId = $stateParams.jdId;

    $scope.client = { name: 'Super-X', minEmployees: '11', maxEmployees: '50' };
    $scope.job =

       { position: 'Chief Technology Officer', status: 'Open', qualification: 'Btech', educationalInstitution: 'Gtu', industries: 'psu', companies: 'IT', duties: 'punctual', skillsMust:['java','dotnet','sql','angularjs'] , skillsOptional:['photoshop','gamer'], incentives: 'petrol charge', workingDays: '5', workingHoursStart: '9:00 AM', workingHoursEnd: '6:00 PM', jobNature: 'full time', gender: 'male', directLineup: 'No', email: 'abc@gmail.com', sourcing: 'Bring marksheets and photograph', interviewAddress: null, cv: '1', functionalArea: 'Graphic Designer/Animator', jobLocation: 'Mumbai', minSalary: '21', maxSalary: '35', minExperience: '3', maxExperience: '5', vacancy: '1', id: '1' }
    ;
    //in database blank values should return null

});