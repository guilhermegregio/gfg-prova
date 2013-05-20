prova-client
============

1. Desenvolva uma aplicação REST (json)
	1. API REST (RESOURCES)
2. Utilize um banco de dados noSQL
3. Validar os modelos de forma diferente em situações diferentes
4. Requisitos para o desenvolvimento
5. Compilar o client para consumir sua aplicação


### Desenvolva uma aplicação REST (json)
Desenvolva uma API REST de geração de formulários, e cadastro do mesmo. O Formulário deve conter um título e os campos para simplificar utilizaremos somente os inputs(text, radio, checkbox, numero, etc) e podem ser validados com os seguintes atributos: requerido, somente leitura, quantidade de caracteres máxima, o campo pode ter um valor padrão para vir preenchido e placehold. Para consumir sua aplicação utilize o client que é fornecido neste repositório.

#### API REST (RESOURCES)

##### Recursos para Template de Formulários
<table width="100%">
	<thead>
		<tr>
			<th width="40%">Resource</th>
			<th width="60%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="#get-templates">GET /templates<a/></td>
			<td>
				<i>Devolve uma lista de formulários</i>
			</td>
		</tr>

		<tr>
			<td><a href="#get-templates-id">GET /templates/:id</a></td>
			<td><i>Devolve os dados para montar um form com um template</i></td>
		</tr>

		<tr>
			<td><a href="#post-templates">POST /templates</a></td>
			<td><i>Adiciona um template</i></td>
		</tr>

		<tr>
			<td><a href="#put-templates-id">PUT /templates/:id</a></td>
			<td><i>Atualiza um template</i></td>
		</tr>

		<tr>
			<td><a href="#delete-templates-id">DELETE /templates/:id</a></td>
			<td><i>Remove um template</i></td>
		</tr>
	</tbody>
</table>

##### Recursos para Dados do Formulário
<table width="100%">
	<thead>
		<tr>
			<th width="40%">Resource</th>
			<th width="60%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="#get-templates-id-data">GET /templates/:id/data/</a></td>
			<td><i>Devolve uma lista dos dados preenchidos em um formulário template</i></td>
		</tr>

		<tr>
			<td><a href="#post-templates-id-data">POST /templates/:id/data/</a></td>
			<td><i>Adiciona um dado num formuláro</i></td>
		</tr>
	</tbody>
</table>


<a name="get-templates" />
##### GET /templates

	Retorna todos os templates.

	Url do recurso

	http://localhost:8080/coletor/templates

	Exemplo de requisição

	GET http://localhost:8080/coletor/templates
	```
	[{
		id: "1",
		title: "Titulo do form",
		fields: [{label: "nome"}, {label: "email"}, {label: "telefone"}]
		dataCount: "1000"
	}]
	```

<a name="get-templates-id" />
##### GET /templates/:id

	Retorno um form

	Url do recurso

	http://localhost:8080/coletor/templates/:id

	Exemplo de requisição

	GET http://localhost:8080/coletor/templates/519a7d41c38f6b4eb02df70c
	```
	{
		title: "Formulário",
		fields: [{
			label: "nome",
			type: "text",
			required: true
		}]
	}
	```


<a name="post-templates" />
##### POST /templates

	Url do recurso

	http://localhost:8080/coletor/templates

	Adiciona um template de formulário

	Parametros:

		title
			Campo obrigatório
		fields
			Deve conter pelo menos um field
			
			label
				obrigatório

			type
				obrigatório
				text, radio, checkbox, email, tel, number, etc...

			required
				true or false se omitido por padrão é false

			readOnly
				true or false se omitido por padrão é false

			value
				opcioanl

			maxLength
				opcional

			placehold
				opcional

			radio
				requerido somente se o type for radio

	Exemplo de requisição

	POST http://localhost:8080/coletor/templates

	Post Data
	```
	{
		title: "Nome do formulário",
		fields: [{
			label: "Sexo",
			type: "radio",
			required: true,
			readOnly: false,
			value: "masculino",
			radios: [
				{
					"label": "M", 
				"value": "masculino"
				}, {
					"label": "F", 
					"value": "feminino"
				}
			]
		}]
	}	
	```
	```
	{
		_id: "519a7d41c38f6b4eb02df70c"
		title: "Nome do formulário",
		fields: [{
			label: "Sexo",
			type: "radio",
			required: true,
			readOnly: false,
			value: "masculino",
			radios: [
				{
					"label": "M", 
				"value": "masculino"
				}, {
					"label": "F", 
					"value": "feminino"
				}
			]
		}]
	}
	```

<a name="put-templates-id" />
##### PUT /templates/:id

	Url do recurso

	http://localhost:8080/coletor/templates/:id

	Atualizar um template de formulário

	Exemplo de requisição

	PUT http://localhost:8080/coletor/templates/519a7d41c38f6b4eb02df70c

	Put Data
	```
	{
		_id: "519a7d41c38f6b4eb02df70c",
		title: "Nome do formulário alterado",
		fields: [{
			label: "Sexo",
			type: "radio",
			required: true,
			readOnly: false,
			value: "masculino",
			radios: [
				{
					"label": "M", 
				"value": "masculino"
				}, {
					"label": "F", 
					"value": "feminino"
				}
			]
		},{
			label: "Nome",
			type: "text",
			required: true
		}]
	}
	```
	```
	{
		_id: "519a7d41c38f6b4eb02df70c",
		title: "Nome do formulário alterado",
		fields: [{
			label: "Sexo",
			type: "radio",
			required: true,
			readOnly: false,
			value: "masculino",
			radios: [
				{
					"label": "M", 
				"value": "masculino"
				}, {
					"label": "F", 
					"value": "feminino"
				}
			]
		},{
			label: "Nome",
			type: "text",
			required: true
		}]
	}
	```

<a name="delete-templates-id" />
##### DELETE /templates/:id

	Url do recurso

	http://localhost:8080/coletor/templates/:id

	Remove um template de formulário

	Exemplo de requisição

	DELETE http://localhost:8080/coletor/templates/519a7d41c38f6b4eb02df70c

	<a name="get-templates-id-data" />
	##### GET /templates/:id/data

	Url do recurso

	http://localhost:8080/coletor/templates/:id

	Exemplo de requisição

	PUT http://localhost:8080/coletor/templates/519a7d41c38f6b4eb02df70c

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

<a name="post-templates-id-data" />
##### POST /templates/:id/data

	Url do recurso

	http://localhost:8080/coletor/templates/:id/data

	Exemplo de requisição

	POST http://localhost:8080/coletor/templates/519a7d41c38f6b4eb02df70c/data

	Post Data
	```
	{
		id: "",
		nome: "",
		telefone: "",
		email: "",
		apelido: ""
	}
	```

### Utilize um banco de dados noSQL
Utilize um banco de dados noSQL baseado em documentos e grave tudo num unico documento 

Exemplo de documento:
```
{
	title: "Titulo do formulário",
	fields: [{
		label: "Nome",
		type: "text",
		required: true,
		placehold: "Nome:"
	},{
		label: "Sexo",
		type: "radio",
		required: true,
		radios: [{
			"label": "M",
			"value": "masculino"
		},{
			"label": "F",
			"value": "feminino"
		}],
		value: 1
	},{
		label: "E-mail",
		type: "email",
		required: false,
		placehold: "Digite um e-mail"
	},{
		label: "idade",
		type: "number",
		required: false
	}],
	data: [
		{
			nome: "Guilherme",
			sexo: "masculino",
			email: "guilherme@email.com",
			idade: 27
		},
		{
			nome: "Rafael",
			sexo: "masculino"
		}
	]
}
```

### Validar os modelos de forma diferente em situações diferentes



### Requisitos para o desenvolvimento

* Desenvolva com tdd
* Utilize algum degenciador de dependencia
* Automatize o build
* Coloque o código no github
* Colocar a aplicação na amazon

### Compilar o client para utilizar em sua aplicação

* Pre-requisitos

		Install node e npm

		Install compass

		Install bower

		Install grunt


* Build

	execute os seguintes comandos:

		npm install && bower install

		grunt