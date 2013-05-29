/* global $*/
'use strict';

angular.module('provaClientApp')
	.controller('NewCtrl', function ($scope, $location, templateService) {
		$scope.fieldList = [];
		$scope.fieldNew = {};
		$scope.newFieldFlag = false;
		$scope.form = {
			fields: $scope.fieldList
		};

		document.querySelectorAll('.btn-success')[0].style.display = 'none';

		$scope.createForm = function() {
			if ($scope.form.title !== undefined) {
				templateService.save($scope.form, function () {
					$location.path('/');
				}, function(data){
					$scope.$emit('alertEvent', data);
				});
			}else if($scope.form.fields.length === 0){
				document.querySelectorAll('.popForm')[0].focus();
			}else{
				document.querySelectorAll('.edit input')[0].focus();
			}
		};

		var toArray = function (input) {
			var arrayRadios = [];
			var radios = input.split(',');

			radios.forEach(function (data) {
				var radio = data.split(':');

				arrayRadios.push({label: radio[0], value: radio[1]});
			});
			return arrayRadios;
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

			if($scope.fieldNew.type === 'radio'){
				var objRadios = toArray($scope.fieldNew.radios);
				$scope.fieldNew.radios = objRadios;
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
	});