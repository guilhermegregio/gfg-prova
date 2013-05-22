'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.formList = [
			{
				id: '1',
				title: 'Título do form',
				fields: [
					{label: 'Nome'},
					{label: 'Email'},
					{label: 'Telefone'}
				],
				dataCount: '1000'
			}
		];

		$scope.getTemplateForm = function () {
			$http({
				method: 'GET',
				url: '@@host/templates'
			})
			.success(function () {
				console.log('SUCCESS');
			})
			.error(function () {
				console.log('ERRO');
			});
		};

		$scope.removeForm = function () {
			$http({
				method: 'DELETE',
				url: '@@host/templates/:id'
			})
			.success(function () {
				console.log('SUCCESS');
			})
			.error(function () {
				console.log('ERRO');
			});
		};
	});