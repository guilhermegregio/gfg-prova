'use strict';

angular.module('provaClientApp', ['ngResource'])
	.config(function($routeProvider, $httpProvider) {
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

	$httpProvider.responseInterceptors.push(function($q) {
		return function(promise) {

			var onSuccess = function() {
			};

			var onError = function (response) {
				$q.reject(response);
			};

			promise.then(onSuccess, onError);

			return promise;
		};
	});
});