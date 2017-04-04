'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */

angular
  .module('sbAdminApp', [

    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'ui.toggle',
    'ngFileUpload'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
          debug: false,
          events: true,
      });

      $urlRouterProvider.otherwise('/dashboard/home');

      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/main.html',
            resolve: {
                loadMyDirectives: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                    {
                        name: 'sbAdminApp',
                        files: [
                        'scripts/directives/header/header.js',
                        'scripts/directives/header/header-notification/header-notification.js',
                        'scripts/directives/sidebar/sidebar.js',
                        'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'toggle-switch',
                        files: ["vendor/js/angular-toggle-switch.min.js",
                               "vendor/css/angular-toggle-switch.css"
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'ngAnimate',
                        files: ['vendor/js/angular-animate.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngCookies',
                        files: ['vendor/js/angular-cookies.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngResource',
                        files: ['vendor/js/angular-resource.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngSanitize',
                        files: ['vendor/js/angular-sanitize.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngTouch',
                        files: ['vendor/js/angular-touch.js']
                    })
                }
            }
        })
        .state('dashboard.home', {
            url: '/home',
            controller: 'MainCtrl',
            templateUrl: 'views/dashboard/home.html',
            resolve: {
                loadMyFiles: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: [
                        'scripts/controllers/main.js',
                        'scripts/directives/timeline/timeline.js',
                        'scripts/directives/notifications/notifications.js',
                        'scripts/directives/chat/chat.js',
                        'scripts/directives/dashboard/stats/stats.js'
                        ]
                    })
                }
            }
        })

        .state('login', {
            templateUrl: 'views/pages/login.html',
            url: '/login'
        })

        .state('dashboard.notifications', {
            templateUrl: 'views/ui-elements/notifications.html',
            url: '/notifications'
        })


        .state('dashboard.positions', {
            templateUrl: 'views/positions.html',
            url: '/positions',
            controller: 'positionsController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/positionsController.js']
                    })

                }
            }

        })







        //.state('dashboard.job', {
        //    templateUrl: 'views/job.html',
        //    url: '/job/:jobId',
        //    controller: 'jobController',
        //    resolve: {
        //        loadMyFile: function ($ocLazyLoad) {
        //            return $ocLazyLoad.load({
        //                name: 'sbAdminApp',
        //                files: ['scripts/controllers/jobController.js']
        //            })

        //        }
        //    }
        //})
          .state('dashboard.downloadCV', {
              templateUrl: 'views/downloadCV.html',
              url: '/downloadCV/:candidateId',
              controller: 'downloadCVController',
              resolve: {
                  loadMyFile: function ($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name: 'sbAdminApp',
                          files: ['scripts/controllers/downloadCVController.js']
                      })

                  }
              }
          })

//below is to view all jobs in candidate dropdown

           .state('dashboard.allCandidates', {
               templateUrl: 'views/allCandidates.html',
               url: '/allCandidates',
               controller: 'allCandidatesController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['scripts/controllers/allCandidatesController.js']
                       })

                   }
               }
           })


        .state('dashboard.candidate', {
            templateUrl: 'views/candidate.html',
            url: '/candidate/:jobId/:candidateId',
            controller: 'candidateController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/candidateController.js',
                        'scripts/directives/enterEvent/enterEvent.js']
                    })

                }
            }
        })

           .state('dashboard.viewJd', {
               templateUrl: 'views/viewJd.html',
               url: '/viewJd/:jdId',
               controller: 'viewJdController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['scripts/controllers/viewJdController.js']
                       })

                   }
               }
           })

           .state('dashboard.editJd', {
               templateUrl: 'views/editJd.html',
               url: '/editJd/:jobId',
               controller: 'editJdController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['vendor/js/summernote.min.js',
                           'vendor/css/summernote.css',
                               'scripts/controllers/editJdController.js',
                               'scripts/directives/enterEvent/enterEvent.js'
                           ]

                       })

                   }
               }
           })


            .state('dashboard.calender', {
                templateUrl: 'views/calender.html',
                url: '/calender',
                controller: 'calenderController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/calenderController.js']
                        })

                    }
                }
            })



            .state('dashboard.statistics', {
                templateUrl: 'views/statistics.html',
                url: '/statistics',
                controller: 'statisticsController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/statisticsController.js']
                        })

                    }
                }
            })


        .state('dashboard.newCandidates', {
            templateUrl: 'views/newCandidates.html',
            url: '/newCandidates',
            controller: 'newCandidatesController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/newCandidatesController.js']
                    })

                }
            }
        })

           .state('dashboard.changePassword', {
               templateUrl: 'views/changePassword.html',
               url: '/changePassword',
               controller: 'changePasswordController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['scripts/controllers/changePasswordController.js']
                       })

                   }
               }
           })

        .state('dashboard.newjd', {        //for posting/uploading new job description
            templateUrl: 'views/newjd.html',
            url: '/newjd',
            controller: 'jdController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/jdController.js',
                        'vendor/js/summernote.min.js',
                        'vendor/css/summernote.css',
                        'scripts/directives/enterEvent/enterEvent.js'


                        ]
                    })

                }
            }
        })

//COnsultant view

      .state('dashboard.newCv', {        //for posting/uploading new job description
          templateUrl: 'views/newCv.html',
          url: '/newCv/:jdId',
          controller: 'newCvController',
          resolve: {
              loadMyFile: function ($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'sbAdminApp',
                      files: ['scripts/controllers/newCvController.js',

                     'scripts/directives/enterEvent/enterEvent.js'


                      ]
                  })

              }
          }
      })



  }]);


