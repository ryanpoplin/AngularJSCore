var coreApp = angular.module('CoreApp', ['ngRoute']);

coreApp.controller('CoreController', function($scope) {

  $scope.items = [{name: 'Ryan Poplin', city: 'Greenville, SC'}, 
                  {name: 'Jen Tucker', city: 'Charlotte, NC'}, 
                  {name: 'Jen Scotts', city: 'Atlanta, GA'}];

  $scope.addUser = function () {

    $scope.items.push({ name: $scope.newUser.name, city: $scope.newUser.city });

  };

  $scope.logUser = function () {

    console.log();

  };

});

coreApp.config(function ($routeProvider) {

  $routeProvider
    .when('/',
      {
        controller: 'CoreController',
        templateUrl: 'partials/one.html'
      })
    .when('/view2',
      {
        controller: 'CoreController',
        templateUrl: 'partials/two.html'
      })
    .otherwise({ redirectTo: '/' });

});