var app = angular.module('portfolio', ['ngResource', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/resume', {
        templateUrl: '/resume/resume.html',
        controller: 'resumeController'
      }).
      when('/projects', {
        templateUrl: '/projects/projects.html',
        controller: 'resumeController'
      }).
      when('/contact', {
        templateUrl: '/contact/contact.html',
        controller: 'resumeController'
      }).
      when('/', {
        templateUrl: '/home/home.html',
        controller: 'resumeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
