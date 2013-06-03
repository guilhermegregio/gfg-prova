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
				$scope.$emit('alertEvent', {errors: [{message: 'Deve conter ao menos um campo!'}]});
				document.querySelectorAll('.popForm')[0].focus();
			}else{
				$scope.$emit('alertEvent', {errors: [{message: 'Preencher o campo Título do Formulário'}]});
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

		var ValidateFields = function (fieldModel) {
			this.field = fieldModel;
			this.messageErrors = [];

			this.sendErrors = function () {
				$scope.$emit('alertEvent', {errors: this.messageErrors});
			};

			this.addErrors = function () {
				var field = this.field,
					messages = [],
					validateRadio = /(\w\:\w)/g,
					elem = $('.pop');

				if (field.type === undefined || field.type === '') {
					messages.push({message: 'O campo TIPO é obrigatório'});
					elem.children('select').focus();
				}else if (field.label === undefined) {
					elem.children('input[type=text]').eq(0).focus();
				}else if (field.radios === undefined) {
					$(elem).children('div').children('.fieldRadios').focus();
				}
				if (field.label === undefined || field.label === '') {
					messages.push({message: 'O campo LABEL é obrigatório'});
				}
				if (field.type === 'radio') {
					if (field.radios === undefined || field.radios === '') {
						messages.push({message: 'O campo RADIOS é obrigatório'});

					}else if (field.radios.length > 0) {
						if (!validateRadio.test(field.radios)) {
							messages.push({message: 'O campo RADIOS esta incorreto! Insira conforme o exemplo: Masculino:M, Feminino:F'});
						}
					}
				}

				this.messageErrors = messages;
			};

			this.hasErrors = function () {

				if (this.messageErrors.length === 0) {
					return false;
				}

				return true;
			};

			this.addErrors();
		};

		$scope.addField = function () {
			var validate = new ValidateFields($scope.fieldNew);

			if (validate.hasErrors()) {
				validate.sendErrors();
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