'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.formList = [
			{
				id: 'xpto',
				title: 'Form bacana',
				fields: 'Nome, Email, Telefone',
				totalRegistros: '1000'
			}, {
				id: 'poit',
				title: 'Form angularjs',
				fields: 'Nome, Email, Telefone',
				totalRegistros: '500000000'
			}, {
				id: 'asdf',
				title: 'Form jaca',
				fields: 'Nome, Email, Telefone',
				totalRegistros: '100'
			}, {
				id: 'poit',
				title: 'Form azeitona',
				fields: 'Nome, Email, Telefone',
				totalRegistros: '1'
			}
		];

		$scope.removeForm = function () {
			$http({
				method: 'DELETE',
				url: '@@host/someUrl'
			})
			.success(function () {
				console.log('SUCCESS');
			})
			.error(function () {
				console.log('ERRO');
			});
		};
	});