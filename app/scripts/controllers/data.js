'use strict';

angular.module('provaClientApp')
	.controller('DataCtrl', function ($scope, $routeParams) {

		console.log($routeParams);

		$scope.dataForm = {
			fields: [{label: 'id'}, {label: 'nome'}, {label: 'telefone'}, {label: 'email'}, {label: 'apelido'}],
			data: [{
				id: '519bd0fde4b0a99234c5c6f2',
				nome: 'nome1',
				telefone: '99999-999',
				email: 'dlbca@gmail.com',
				apelido: 'apelido1'
			},
			{
				id: '519bd0fde4b0a99234c5c53f',
				nome: 'nome2',
				apelido: 'apelido2',
				idade: 23
			}]
		};
	});