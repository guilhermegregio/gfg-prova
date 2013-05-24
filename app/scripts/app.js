'use strict';

angular.module('provaClientApp', ['ngResource', 'provaClientAppFilters'])
	.config(function($routeProvider, $httpProvider) {
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