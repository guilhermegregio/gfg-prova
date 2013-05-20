prova-client
============

Desenvolva uma aplicação REST (json);
Utilize um banco de dados noSQL;
Com um crud;
Crie um DAO Generico sem framework de persistencia
Validar os modelos de forma diferente em situações diferentes


GET
Listar os forms
/templates
```
[{
	id: "1",
	title: "Titulo do form",
	fields: [{label: "nome"}, {label: "email"}, {label: "telefone"}]
	dataCount: "1000"
}]
```

POST
Cadastrar um form
/templates
```
{
	title: "",
	fields: [{
		label: "",
		type: "",
		required: true|false,
		readOnly: true|false,
		value: "",
		maxLength: 20

	}]
}
```

PUT
Editar um form
/templates/:id
```
{
	id: "",
	title: "",
	fields: [{
		label: "",
		type: "",
		required: true|false,
		readOnly: true|false,
		value: "",
		maxLength: 20

	}]
}
```

DELETE
Editar um form
/templates/:id

GET
Lista de dados cadastrados para um form
/templates/:id/data/
```
{
	fiedls: [{label: "id"}, {label: "nome"}, {label: "telefone"}, {label: "email"}, {label: "apelido"}],
	data: [{
		id: "",
		nome: "",
		telefone: "",
		email: "",
		apelido: ""
	}]
}
```

POST
Adicionar dado para um form
/templates/:id/data/
```
{
	id: "",
	nome: "",
	telefone: "",
	email: "",
	apelido: ""
}
```

GET
Montar o form para cadastro
/templates/:id
```
{
	title: "",
	fields: [{
		label: "",
		type: "",
		required: true|false,
		readOnly: true|false,
		value: "",
		maxLength: 20
	}]
}
```

Desenvolva com tdd
Utilize algum degenciador de dependencia
Automatize o build
Coloque o código no github
Colocar a aplicação na amazon

//Collection
```
{
	title: "",
	fields: [{
		label: "",
		type: "",
		required: true|false,
		readOnly: true|false,
		value: "",
		maxLength: 20
	}],
	data: [
		{
			id: "",
			nome: "",
			telefone: "",
			email: "",
			apelido: ""
		}
	]
}
```