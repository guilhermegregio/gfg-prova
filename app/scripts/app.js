'use strict';

angular.module('provaClientApp', ['ngResource'])
	.config(function($routeProvider) {
	$routeProvider
		.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
		.when('/edit/:templateEdit', {
		templateUrl: 'views/edit.html',
		controller: 'EditCtrl'
	})
		.when('/data/:templateId', {
		templateUrl: 'views/data.html',
		controller: 'DataCtrl'
	})
		.when('/form/:templateEdit', {
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