angular.module('sbAdminApp')
.controller('downloadCVController', function ($scope, $stateParams) {

    $scope.candidateId = $stateParams.candidateId;
});