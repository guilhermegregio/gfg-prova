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
			placeholder: "Caio Rolando da Rocha",
			defaultValue: ""
		},{
			label: "Email",
			fieldType: "text",
			required: true,
			readOnly: "",
			placeholder: "seuemail@provedor.xxx",
			defaultValue: ""
		},{
			label: "Telefone",
			fieldType: "text",
			required: true,
			readOnly: "readonly",
			placeholder: "999-999-999",
			defaultValue: ""
		},{
			label: "Concorda com os termos",
			fieldType: "checkbox",
			required: false,
			defaultValue: ""
		},{
			label: "Sexo",
			fieldType: "radio",
			required: true,
			radioValues: {
				"M":"1",
				"F":"0"
			},
			defaultValue: ""
		}]
	};
});