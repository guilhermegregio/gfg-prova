'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http, templateService) {

		$scope.formList = [];

		$scope.$emit('alertEvent', {messages: [{message: 'alguma coisa'}]});

		templateService.query(function(templates) {
			$scope.formList = templates;
		}, function(){
			$scope.$emit('alertEvent', {status: 500, messages: [{message: 'alguma coisa 1'}, {message: 'alguma coisa 2'}, {message: 'alguma coisa 3'}]});
		});

		$scope.removeForm = function (id) {
			templateService.delete({templateId: id}, function () {
				$scope.formList.splice($scope.formList.indexOf({id: id}), 1);
			}, function(){
				$scope.$emit('alertEvent', {status: 500, messages: [{message: 'alguma coisa 1'}, {message: 'alguma coisa 2'}, {message: 'alguma coisa 3'}]});
			});
		};
	});