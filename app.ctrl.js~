/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */

(function() {
    'use strict';
    angular
      .module('app')
      .service('projectsFactory', function ($http) {
      	// body...

      	var projects = [];

  	 
  		return{
		    getAllProjects : function () {
  	    		// body...
  	    		   return $http.get("http://localhost:9000/projects.json").then(function(result) {
			        projects = result.data.projects;
			    	 return projects;
			      });

  	    		
  	    	},
  	    	getProject : function (project_slug) {
  	    		// body...
  	    		var pro;
            angular.forEach(projects, function(project){
  	    			if (project.slug == project_slug) {
  	    				pro = project;
                return;
  	    			}
  	    		});
            return pro;
  	    	}

  		}
      })
      .controller('AppCtrl', AppCtrl);

      AppCtrl.$inject  = ['$scope', '$rootScope', '$anchorScroll', '$timeout', '$window'];

      function AppCtrl($scope, $rootScope, $anchorScroll, $timeout, $window) {
        var vm = $scope;
        // config
          

        };

       

      
})();
