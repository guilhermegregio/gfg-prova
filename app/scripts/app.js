'use strict';

angular.module('provaClientApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/new', {
        templateUrl: 'views/edit.html',
        controller: 'NewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
