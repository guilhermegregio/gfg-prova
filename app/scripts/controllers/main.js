'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http, templateService) {

		$scope.formList = [];

		$scope.$emit('alertEvent', {errors: [{message: 'alguma coisa', category:'teste testes'}]});

		templateService.query(function(templates) {
			$scope.formList = templates;
		}, function(data){
			$scope.$emit('alertEvent', data);
			$scope.$emit('alertEvent', {errors: [{message: 'alguma coisa', category:'teste testes'},{message: 'alguma coisa', category:'teste testes'},{message: 'alguma coisa', category:'teste testes'}]});
		});

		$scope.removeForm = function (id) {
			templateService.delete({templateId: id}, function () {
				$scope.formList.splice($scope.formList.indexOf({id: id}), 1);
			}, function(data){
				$scope.$emit('alertEvent', data);
			});
		};
	});