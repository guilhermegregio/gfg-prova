'use strict';

angular.module('provaClientApp')
	.controller('MainCtrl', function ($scope, $http, templateService) {

		$scope.formList = [];

		templateService.query(function(templates) {
			$scope.formList = templates;
		});
		// templateService.get({templateId: 1});
		// 
		// templateService.save({title: 'postado'});
		// templateService.update({templateId: 1}, {title: 'outra coisa'});

		$scope.removeForm = function (id) {
			templateService.delete({templateId: id}, function () {
				$scope.formList.splice($scope.formList.indexOf({id: id}), 1);
			});
		};
	});