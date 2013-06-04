'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope, $location, $routeParams, dataFormService) {

		$scope.data = {};
		$scope.viewForm = {};

		dataFormService.get({templateId: $routeParams.templateEdit}, function(viewForm) {
			$scope.viewForm = viewForm;
		}, function(data){
			$scope.$emit('alertEvent', data);
		});

		// var ValidateFields = function (fieldModel) {
		// 	this.field = fieldModel;
		// 	this.messageErrors = [];

		// 	this.sendErrors = function () {
		// 		$scope.$emit('alertEvent', {errors: this.messageErrors});
		// 	};

		// 	this.addErrors = function () {
		// 		var field = this.field,
		// 			messages = [];

		// 		for(var prop in field){
		// 			if (field[prop] === '' || field[prop] === undefined) {
		// 				document.querySelector('input').focus();
		// 				messages.push({message: 'O campo '+prop+' é obrigatório'});
		// 			}
		// 		}

		// 		this.messageErrors = messages;
		// 	};

		// 	this.hasErrors = function () {
		// 		if (this.messageErrors.length === 0) {
		// 			return false;
		// 		}

		// 		return true;
		// 	};

		// 	this.addErrors();
		// };

		$scope.cadastrar = function () {
			var postData = {};
			$scope.viewForm.fields.forEach(function (data) {
				postData[data.label] = data.value;
			});

			dataFormService.save({templateId: $routeParams.templateEdit}, postData, function() {
				$location.path('/data/' + $routeParams.templateEdit);
			}, function(data){
				$scope.$emit('alertEvent', data.data);
			});
		};
	});