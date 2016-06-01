/**
 * Controllers module of the application.
 */
(function() {
    'use strict';
    angular
      .module('app.controllers', [])
      .controller('homeController',function ($scope) {
      	// body...
      	$scope.trial = "Hello World";
      })
      .controller('aboutController',function ($scope) {
      	// body...
          $scope.desc =" I am a passionate, self taught computer and technology enthusiast. I believe \
                   in learning by doing, so  I always engage myself in learning new things and \
                  mastering the things I already know. Currently engaged in Web design and \
                  development. I am always ready to learn new technologies and explore them.";
      
          $scope.about = {
            'education' : [
              'B.E. Computer Engineering (Third Year) at Pune Institute of Computer Technology, Pune',
            ],

            'experiences' : [
              'Intern at Tweeny Technologies.',
              'Web, App and Design Team Member at IEEE R10 Student Activities Committee.',
              'Web Designer and Developer at PICT IEEE Student Branch.'
            ],

            'hobbies' : [
              'Dancing','Music','Gaming'
            ],

            'interests' : [
              'App development (Mobile/Web).','Data Mining and Analysis.'
            ]

          };

      })
      .controller('skillsController',function ($scope) {
        // body...
        
          $scope.skills = {
            'languages' : [
              {
                'name' : 'HTML5',
                'img' : 'html5.png'
              },
              {
                'name' : 'CSS3',
                'img' : 'css3.png'
              },
              {
                'name' : 'JAVASCRIPT',
                'img' : 'javascript.png'
              },
              {
                'name' : 'Python',
                'img' : 'python.png'
              },
              {
                'name' : 'PHP',
                'img' : 'php.png'
              },
              {
                'name' : 'C++',
                'img' : 'cpp.png'
              },
              {
                'name' : 'JAVA',
                'img' : 'java.png'
              }

            ],
            'frameworks' : [
              {
                'name' : 'Bootstrap',
                'img' : 'bootstrap.png'
              },
              {
                'name' : 'Materialize Css',
                'img' : 'materializecss.png'
              },
              {
                'name' : 'JQuery',
                'img' : 'jquery.png'
              },
              {
                'name' : 'Angular JS',
                'img' : 'angular.png'
              },
              {
                'name' : 'Wordpress',
                'img' : 'wordpress.png'
              },
              {
                'name' : 'Apache Cordova',
                'img' : 'cordova.png'
              },
              {
                'name' : 'Django',
                'img' : 'django.png'
              },
              {
                'name' : 'Flask',
                'img' : 'flask.png'
              }
            ],
            'tools' : [
              {
                'name' : 'Phtoshop',
                'img' : 'photoshop.png'
              },
              {
                'name' : 'Sublime Text',
                'img' : 'sublime.png'
              },
              {
                'name' : 'Terminal',
                'img' : 'shell.png'
              },
              {
                'name' : 'Node Package Manager',
                'img' : 'npm.png'
              },
              {
                'name' : 'Linux',
                'img' : 'linux.png'
              }
            ]

          }; 


        })
      .controller('projectsController',function ($scope,$http,$stateParams,projectsFactory) {
        // body...
       
         projectsFactory.getAllProjects().then(function (result) {
           // body...
           $scope.projects = result;
         });  
    
      })
      .controller('projectDetailsController',function ($scope,$http,$stateParams,projectsFactory) {
        // body...
           $scope.project = projectsFactory.getProject($stateParams.slug);


      })
      .controller('contactController',function ($scope) {
        // body...
        $scope.trial = "Hello Ambarish";
      });
})();
