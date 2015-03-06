// DI...
var coreApp = angular.module('CoreApp', ['ngRoute']);

coreApp.config(function ($routeProvider) {

  $routeProvider
    .when('/',
      {
        controller: 'CoreController',
        templateUrl: 'partials/view.one.html'
      })
    .when('/partial2',
      {
        controller: 'CoreController',
        templateUrl: 'partials/view.two.html'
      })
    .otherwise({ redirectTo: '/' });

});

coreApp.controller('CoreController', function($scope) {

  $scope.items = [{name: 'Ryan Poplin', city: 'Greenville, SC'}, 
                  {name: 'Jen Tucker', city: 'Charlotte, NC'}, 
                  {name: 'Jen Scotts', city: 'Atlanta, GA'}];

});