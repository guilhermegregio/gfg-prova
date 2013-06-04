/*global $*/
'use strict';

angular.module('provaClientApp')
	.controller('EditCtrl', function ($scope, $location, $http, $routeParams, templateService) {

	$scope.fieldList = [];
	$scope.fieldNew = {};
	$scope.currentField = {};
	$scope.form = {};

	document.querySelectorAll('.btn-success')[0].style.display = 'none';

	templateService.get({templateId: $routeParams.templateEdit}, function(form) {
		$scope.form = form;
		$scope.fieldList = $scope.form.fields;
	}, function(data){
		$scope.$emit('alertEvent', data);
	});

	var createForm = function () {
		if ($scope.form.title !== undefined) {
			templateService.update({templateId: $routeParams.templateEdit}, $scope.form, function () {
				$location.path('/');
			}, function(data){
				$scope.$emit('alertEvent', data);
			});
		}else{
			$scope.$emit('alertEvent', {errors : [{category: 'O campo Título do Formulário é obrigatório'}]});
			$('.edit input').first().focus();
		}
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

	var toString = function (arrayRadios) {
		var radios = '';
		arrayRadios.forEach(function (data) {
			radios += data.label + ':' + data.value + ',';
		});
		return radios.substring(0, radios.lastIndexOf(','));
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

	$scope.changeRadio = function (field) {
		field.radios = toArray(field.radiosView);
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

	$scope.removeField = function (form) {
		function removeItem (element) {
			return element.label !== form.label;
		}
		$scope.fieldList = $scope.fieldList.filter(removeItem);
	};

	$scope.createForm = createForm;

});