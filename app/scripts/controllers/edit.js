/*global $*/
'use strict';

angular.module('provaClientApp')
	.controller('EditCtrl', function ($scope, $http) {

	$scope.fieldList = [];
	$scope.fieldNew = {};
	$scope.newFieldFlag = false;

	var fieldError = function (field) {
		var error = 0;

		error += field.type === undefined || field.type === '' ? 1 : 0;
		error += field.label === undefined || field.label === '' ? 1 : 0;

		if (error === 0) {
			return false;
		}

		return true;
	};

	$scope.addField = function () {
		if (fieldError($scope.fieldNew)) {
			return false;
		}

		$scope.fieldList.push($scope.fieldNew);

		$scope.fieldNew = {};

		$('#addField').modal('hide');
	};

	$scope.editField = function (form) {
		$scope.fieldNew = form;
		$scope.newFieldFlag = false;
	};

	$scope.removeField = function (form) {
		function removeItem (element) {
			return element.label !== form.label;
		}
		$scope.fieldList = $scope.fieldList.filter(removeItem);
	};

});