'use strict';

angular.module('provaClientApp')
  .controller('NewCtrl', function ($scope) {

	$scope.fieldList = [];
	$scope.fieldNew = {};
	$scope.newFieldFlag;
	$scope.dataForm = {
		fields: $scope.fieldList
	}

	$scope.createForm = function(){
		console.log($scope.dataForm.fields);
	}

	var fieldError = function (field) {
		var error = 0;

		error += field.type === undefined || field.type === "" ? 1 : 0;
		error += field.label === undefined || field.label === "" ? 1 : 0;

		if (error == 0) {
			return false;
		}

		return true;
	};

	$scope.addField = function () {
		if (fieldError($scope.fieldNew)) {
			return false;
		};

		$scope.fieldList.push($scope.fieldNew);

		$scope.fieldNew = {};

		$('#addField').modal('hide');
	};

	$scope.editField = function (form) {
		$scope.fieldNew = form;
		$scope.newFieldFlag = "false";
	};

	$scope.removeField = function (form) {
		function removeItem(element, index, array) {
			return element.label !== form.label;
		}
		$scope.fieldList = $scope.fieldList.filter(removeItem);
	};

	$scope.newForm = function (dataForm) {
		$http({
			method: 'POST',
			url: '/someUrl',
			data: dataForm
		}).
		success(function () {
			console.log("SUCCESS");
		}).
		error(function () {
			console.log("ERRO");
		});
	}

  });
