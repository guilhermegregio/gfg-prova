'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http) {
	$scope.formList = [{
		id: "xpto",
		title: "Form bacana",
		fields: "Nome, Email, Telefone",
		totalRegistros: "1000"
	}, {
		id: "poit",
		title: "Form angularjs",
		fields: "Nome, Email, Telefone",
		totalRegistros: "500000000"
	}];

	$scope.removeForm = function (formId) {
		$http({
			method: 'DELETE',
			url: '/someUrl'
		}).
		success(function () {
			console.log("SUCCESS");
		}).
		error(function () {
			console.log("ERRO");
		});
	}

});