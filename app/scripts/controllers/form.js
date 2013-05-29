'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope, $routeParams, dataFormService) {

		$scope.data = {};
		$scope.viewForm = {};

		dataFormService.get({templateId: $routeParams.templateEdit}, function(viewForm) {
			$scope.viewForm = viewForm;
		}, function(data){
			$scope.$emit('alertEvent', data);
		});

		$scope.cadastrar = function () {
			var postData = {};
			$scope.viewForm.fields.forEach(function (data) {
				postData[data.label] = data.value;
			});

			dataFormService.save({templateId: $routeParams.templateEdit}, postData, function(viewForm) {
				console.log(viewForm);
			}, function(data){
				$scope.$emit('alertEvent', data);
			});
		};
	});