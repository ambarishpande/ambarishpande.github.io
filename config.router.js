/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider'];
      function config( $stateProvider,   $urlRouterProvider ) {
        
        
        $urlRouterProvider
          .otherwise('/');
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: "homeController"
           }
          )
            .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
              data:{'title':'About Me'},
              controller: "aboutController"
            })
            .state('skills', {
              url: '/skills',
              templateUrl: 'views/skills.html',
              data:{'title':'Skills'},
              controller: "skillsController"
            })
             .state('projects', {
              abstract:true,
              url: '/projects',
              templateUrl: 'views/projects.html',
              data:{'title':'Projects'},
              controller: "projectsController"
            })
             .state('projects.list', {
              url: '/list',
              templateUrl: 'views/projects.list.html'
            })
             .state('projects.details', {
              url: '/:slug',
              templateUrl: 'views/projectsSingle.html',
              controller: "projectDetailsController"
            })
             .state('contact', {
              url: '/contact',
              templateUrl: 'views/contact.html',
              data:{'title':'contact'},
              controller: "contactController"
            })
          ;


      }
})();
