# Simples Dental Front-End

Project front-end Angular para a API [jsonplaceholder](https://jsonplaceholder.typicode.com/) e gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.1.12.

## Instalação

```
$ npm install
````

### Pacotes

- [Angular Material](https://material.angular.io/).

```
$ ng add @angular/material
```

- [ts-md5](https://www.npmjs.com/package/ts-md5)

```
$ npm i ts-md5 --save
```

## Executando testes e2e

### Teste de autenticação
* deve estar na página registrar
* deve registrar usuário
* deve estar na página Login
* deve realizar login

### Teste Lista de Álbuns
* deve estar na página lista de álbuns
* deve retornar primeiro item da lista de álbuns
* deve existir uma imagem no item da lista

### Teste Detalhes do Álbum
* deve retornar título da página detalhes álbuns
* deve retornar o título do álbuns
* deve retornar o décimo item da lista de fotos

Para executar os testes de ponta a ponta via [Protractor](http://www.protractortest.org/).
```
$ ng e2e
``` 

### Dev
Marcus Veloso