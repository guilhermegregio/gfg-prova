/*global $*/
'use strict';

angular.module('provaClientApp')
	.controller('NewCtrl', function ($scope) {
		$scope.fieldList = [];
		$scope.fieldNew = {};
		$scope.newFieldFlag = false;
		$scope.dataForm = {
			fields: $scope.fieldList
		};

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

		$scope.removeField = function (field) {
			$scope.fieldList.splice($scope.fieldList.indexOf(field), 1);
		};

		$scope.createForm = function() {
			if ($scope.dataForm.title && $scope.dataForm.fields.length !== 0) {
				$http({
					url: 'http://172.17.0.110:8080/teste/templates',
					method: "POST",
					data: $scope.dataForm,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).success(function (data, status, headers, config) {
					$scope.dataForm = dataForm; // assign  $scope.persons here as promise is resolved here
				}).error(function (data, status, headers, config) {
					$scope.status = status;
				});
				var json = $scope.dataForm;
				console.log(angular.toJson(json));
			}
		};
	});