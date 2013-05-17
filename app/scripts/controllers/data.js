'use strict';

angular.module('provaClientApp')
  .controller('DataCtrl', function ($scope) {

  	$scope.dados = [{
  		id: "xpto",
		nome: "Guilherme",
		telefone: "999999999"
	},{
  		id: 'gamgstyle',
		nome: "Gamg",
		telefone: "666666666"
	},{
  		id: 'editar',
		nome: "O Formulario",
		telefone: "666666666",
		email: "fudeu@gmail.com"
	},{
  		id: 'editar',
		apelido: "fififi",
		telefone: "666666666",
	}];

	$scope.nomes = ["id", "nome", "telefone", "email", 'apelido'];

  });
