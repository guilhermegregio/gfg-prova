'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope, $routeParams, templateService) {

		$scope.data = {};
		$scope.viewForm = {};

		templateService.get({templateId: $routeParams.templateEdit}, function(viewForm) {
			$scope.viewForm = viewForm;
		}, function(){
			$scope.$emit('alertEvent', {status: 500, messages: [{message: 'alguma coisa 1'}, {message: 'alguma coisa 2'}, {message: 'alguma coisa 3'}]});
		});

		$scope.cadastrar = function () {
			var postData = {};
			$scope.viewForm.fields.forEach(function (data) {
				postData[data.label] = data.value;
			});

			templateService.save({templateId: $routeParams.templateEdit}, postData, function(viewForm) {
				console.log(viewForm);
			}, function(){
				$scope.$emit('alertEvent', {status: 500, messages: [{message: 'alguma coisa 1'}, {message: 'alguma coisa 2'}, {message: 'alguma coisa 3'}]});
			});
		};
	});