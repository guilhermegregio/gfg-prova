'use strict';

angular.module('provaClientApp')
	.controller('DataCtrl', function ($scope, $routeParams, templateService) {

		$scope.dataForm = {};
		templateService.get({templateId: $routeParams.templateId}, function(templateForm) {
			$scope.dataForm = templateForm;
		}, function(){
			$scope.$emit('alertEvent', {status: 500, messages: [{message: 'alguma coisa 1'}, {message: 'alguma coisa 2'}, {message: 'alguma coisa 3'}]});
		});
	});