'use strict';

angular.module('provaClientApp')
	.controller('DataCtrl', function ($scope, $routeParams, dataFormService) {

		$scope.dataForm = {};
		dataFormService.get({templateId: $routeParams.templateId}, function(templateForm) {
			$scope.dataForm = templateForm;
		}, function(data){
			$scope.$emit('alertEvent', data);
		});
	});