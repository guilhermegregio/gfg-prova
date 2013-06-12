'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope, $location, $routeParams, templateService) {

		$scope.data = {};
		$scope.viewForm = {};

		templateService.get({templateId: $routeParams.templateEdit}, function(viewForm) {
			$scope.viewForm = viewForm;
		}, function(data){
			$scope.$emit('alertEvent', data);
		});

		$scope.cadastrar = function () {
			var postData = {};
			$scope.viewForm.fields.forEach(function (data) {
				postData[data.label] = data.value;
			});

			templateService.save({templateId: $routeParams.templateEdit}, postData, function() {
				$location.path('/data/' + $routeParams.templateEdit);
			}, function(data){
				$scope.$emit('alertEvent', data.data);
			});
		};
	});