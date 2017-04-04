'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function ($scope, $position) {


      $scope.consultant = "Yash";
      //compute from db
      $scope.screeningHold = 5;
      $scope.schedulingAttempted = 6;
      $scope.screeningAttempted = 2;
      $scope.awaitingInput = 3;
  });
