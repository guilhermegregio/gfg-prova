'use strict';

angular.module('provaClientApp')
	.controller('FormCtrl', function ($scope) {

	$scope.viewForm = {
		title: "Form bacana",
		fields: [{
			label: "Nome",
			fieldType: "text",
			required: true,
			readOnly: "",
			defaultValue: "Nome"
		},{
			label: "Email",
			fieldType: "text",
			required: true,
			readOnly: "",
			defaultValue: "seuemail@show.com.br"
		},{
			label: "Telefone",
			fieldType: "text",
			required: true,
			readOnly: "readonly",
			defaultValue: "999-999-999"
		},{
			label: "Concorda com os termos",
			fieldType: "checkbox",
			required: true,
			readOnly: "",
			defaultValue: ""
		},{
			label: "Sexo",
			fieldType: "radio",
			required: true,
			readOnly: "",
			radioValues: {
				"M":"1",
				"F":"0"
			},
			defaultValue: ""
		}]
	};


	console.log($scope.viewForm.fields[4].radioValues);
});