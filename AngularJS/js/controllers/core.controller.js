var coreApp = angular.module('CoreApp', ['ngRoute']);

coreApp.factory('coreFactory', function () {
  
  var users = [
    { name: 'Ryan Poplin', city: 'Simpsonville, SC' },
    { name: 'Kendra Kent', city: 'Greenville, SC' },
    { name: 'Byrdann Fox', city: 'Oslo, No' }
  ];

  var factory = {};

  factory.getUsers = function () {

    return users;

  };

  return factory;

});

coreApp.controller('CoreController', function($scope, coreFactory) {

  $scope.users = [];

  function init () {

    $scope.users = coreFactory.getUsers();

  }

  init();

  $scope.addUser = function () {

    $scope.users.push({ name: $scope.newUser.name, city: $scope.newUser.city });

  };

  $scope.logUserData = function () {

    console.log('Need some detail data...');

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