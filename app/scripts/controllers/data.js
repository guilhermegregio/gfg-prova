'use strict';

angular.module('provaClientApp')
	.controller('DataCtrl', function ($scope, $routeParams, templateService) {

		$scope.dataForm = {};
		templateService.get({templateId: $routeParams.templateId}, function(templateForm) {
			$scope.dataForm = templateForm;
		}, function(data){
			$scope.$emit('alertEvent', data);
		});
	});