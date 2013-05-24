'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope, $routeParams, templateService) {

		$scope.data = {};
		$scope.viewForm = {};

		templateService.get({templateId: $routeParams.templateEdit}, function(viewForm) {
			$scope.viewForm = viewForm;
		});

		$scope.cadastrar = function () {
			var postData = {};
			$scope.viewForm.fields.forEach(function (data) {
				postData[data.label] = data.value;
			});

			templateService.save({templateId: $routeParams.templateEdit}, postData, function(viewForm) {
				console.log(viewForm);
			});
		};
	});