prova-client
============

Desenvolva uma aplicação REST (json);
Utilize um banco de dados noSQL;
Com um crud;
Crie um DAO Generico sem framework de persistencia
Validar os modelos de forma diferente em situações diferentes


## API REST (RESOURCES):

* [GET /templates](#get-templates)

	Devolve uma lista de formulários

* [GET /templates/:id/data/](#get-templates-id-data)

	Devolve uma lista dos dados preenchidos em um formulário template

* [GET /templates/:id](#get-templates-id)

	Devolve os dados para montar um form com um template

* [POST /templates](#post-templates)

	Adiciona um template 

* [POST /templates/:id/data/](#post-templates-id-data)

	Adiciona um dado num formuláro

* [PUT /templates/:id](#put-templates-id)

	Atualiza um template

* [DELETE /templates/:id](#delete-templates-id)

	Remove um template

<a name="get-templates" />
### GET /templates

```
[{
	id: "1",
	title: "Titulo do form",
	fields: [{label: "nome"}, {label: "email"}, {label: "telefone"}]
	dataCount: "1000"
}]
```

<a name="get-templates-id-data" />
### GET /templates/:id/data

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

<a name="get-templates-id" />
### GET /templates/:id

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

<a name="post-templates" />
### POST /templates

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

<a name="post-templates-id-data" />
### POST /templates/:id/data

```
{
	id: "",
	nome: "",
	telefone: "",
	email: "",
	apelido: ""
}
```

<a name="put-templates-id" />
### PUT /templates/:id

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

<a name="delete-templates-id" />
### DELETE /templates/:id


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