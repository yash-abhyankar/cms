'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar', ['$location', function () {
      return {
          templateUrl: 'scripts/directives/sidebar/sidebar.html',
          restrict: 'E',
          replace: true,
          scope: {
          },
          controller: function ($scope) {
              $scope.selectedMenu = 'dashboard';
              $scope.collapseVar = 0;
              $scope.multiCollapseVar = 0;

              $scope.check = function (x) {

                  if (x == $scope.collapseVar)
                      $scope.collapseVar = 0;
                  else
                      $scope.collapseVar = x;
              };

              $scope.multiCheck = function (y) {

                  if (y == $scope.multiCollapseVar)
                      $scope.multiCollapseVar = 0;
                  else
                      $scope.multiCollapseVar = y;
              };

              //fetch latest jd (3 max)
              $scope.jobs = [{ id: 1, position: 'Cheif Technology Officer', status: 'Open' }, { id: 2, position: 'UI/UX Designer', status: 'Open' }, { id: 3, position: 'Java Developer', status: 'Close' }];

          }

      }
  }]);
