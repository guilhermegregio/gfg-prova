/* global $*/
'use strict';

angular.module('provaClientApp')
	.controller('NewCtrl', function ($scope, $location, templateService) {
		$scope.fieldList = [];
		$scope.fieldNew = {};
		$scope.currentField = {};
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

		var toString = function (arrayRadios) {
			var radios = '';
			arrayRadios.forEach(function (data) {
				radios += data.label + ':' + data.value + ',';
			});
			return radios.substring(0, radios.lastIndexOf(','));
		};

		$scope.changeRadio = function (field) {
			field.radios = toArray(field.radiosView);
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
						var str = field.radiosView;
						var findArray = str.match(/\w\:\w/g);
						var haveArray = str.split(',');

						if (findArray === null) {
							messages.push({message: 'O campo RADIOS esta incorreto! Insira conforme o exemplo: Masculino:M, Feminino:F'});
						} else {
							if(findArray.length !== haveArray.length) {
								messages.push({message: 'O campo RADIOS esta incorreto! Insira conforme o exemplo: Masculino:M, Feminino:F'});
							}
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
				var objRadios = toArray($scope.fieldNew.radiosView);
				$scope.fieldNew.radios = objRadios;
			}

			if ($scope.currentField.label === undefined) {
				$scope.fieldList.push($scope.fieldNew);
			} else {
				$.extend($scope.currentField, $scope.fieldNew);
			}

			$scope.fieldNew = {};
			$scope.currentField = {};

			$('#addField').modal('hide');
		};

		$scope.toggleRequired = function (field, ev) {
			$(ev.currentTarget).siblings('.active').removeClass('active');
			field.required = field.required === true ? false : true;
			field.readOnly = false;
		};

		$scope.toggleReadonly = function (field, ev) {
			$(ev.currentTarget).siblings('.active').removeClass('active');
			field.readOnly = field.readOnly === true ? false : true;
			field.required = false;
		};

		$scope.editField = function (currentField) {
			$scope.currentField = currentField;

			var field = $.extend({}, currentField);

			if (field.radios) {
				field.radiosView = toString(field.radios);
			}
			$scope.fieldNew = $.extend({}, field);
		};

		$scope.removeField = function (field) {
			$scope.fieldList.splice($scope.fieldList.indexOf(field), 1);
		};
	});