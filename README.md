<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
		<img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividades das Aulas de TypeScript Backend 👨‍💻
          	<a  href="https://www.alphaedtech.org.br/">
			Alpha EdTech
		</a>
	</h4>
</div>  

## 🧐 Sobre as atividades
 
### Aula 05 - Webpack
Criar um novo projeto seguindo estes passos:
1. Instale o webpack
2. Inicialize o webpack
3. Configure o webpack
4. Compile seu código typescript com `webpack` para JS;
Observação: para o backend não se usa webpack.

---

### Aula 06 - Backend - Parte 1
Criar um novo projeto seguindo estes passos:

1. Instalar as **dependências**:
    - express;
    - uuid;
    - bcrypt;
    - dotenv;
    - cors;
    - cookie-parser.
2. Instalar as **devDependencies**:
    - Typescript
        - @types/node;
        - @types/express;
        - @types/cors ;
        - @types/dotenv;
        - @types/uuid ;
        - @types/cookie-parser.
    - Demais:
		- nodemon;
		- concurrently.
3. Crie no Postgres um **database** chamado “**db_typescript**” e nele uma tabela chamada “**accounts**” com:
    - id, email, name e password;
	- Observação: adicionei um arquivo chamado "database.png" para que seja possível a visualização de como ficou o item 3 no PgAdmin.
4. Aplique os comandos e códigos necessário para levantar seu servidor na porta **8000**;
5. **Compile** seu código typescript para JS.

---

### 🚧 Aula 06 - Backend - Parte 2 🚧
Usar o projeto da lição anterior seguindo estes passos:
Os **regex** necessários serão:
1. email: /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim 
2. password :/^\w{1,}$/gim
3. name: /^[a-z]{1,}$/gim
- Assim como validamos nossos dados de entrada na lição passada(no frontend), você deve criar os **validators** para necessários cada dado recebido;
- Crie uma rota de **criação de usuários**, você deve utilizar os conceitos de **classe** e **regex** aprendidos até aqui para a validação.
    - **Nesta lição não é necessário processar os dados recebidos, apenas retornar os dados esperados.**
    - As rotas devem ser:
        1. **Cadastro** POST: “/accounts/”
            1. Recebe: email, name e password;
            2. Retorna: id, email, name;
        2. **Login** POST: “/accounts/login”
            1. Recebe: email e password;
            2. Retorna: id;
            3. Cookie: token = sessionID
        3. **Update** PATCH ~~(autenticada)~~: “/accounts/”
            1. Recebe: email, name e/ou password;
            2. Retorna: id, email, name; 
- **Compile** seu código typescript para JS.

## 🔗 Referências básicas 

- [Introduction | webpack](https://webpack.js.org/api/)
- [Command Line Interface | webpack](https://webpack.js.org/api/cli/#init)
- [TypeScript | webpack](https://webpack.js.org/guides/typescript/)
- [Using webpack with TypeScript - LogRocket Blog](https://blog.logrocket.com/using-webpack-typescript/)
- [TypeScript: Documentation - Utility Types (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
- [TypeScript promise type | Learn How does TypeScript Promise type work? (educba.com)](https://www.educba.com/typescript-promise-type/)
- [TypeScript: Documentation - Everyday Types (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [uuid - npm (npmjs.com)](https://www.npmjs.com/package/uuid)
- [Como usar o TypeScript no back-end? – Acervo Lima](https://acervolima.com/como-usar-o-typescript-no-back-end/)
- [Como usar TypeScript com NodeJs e express - Aprenda agora! (vidafullstack.com.br)](https://vidafullstack.com.br/javascript/como-usar-typescript-com-nodejs-e-express/)

## 🔗 Referências avançadas

- [Como usar TypeScript com NodeJs e express - YouTube](https://www.youtube.com/watch?v=r_wyef7ZK2g)
- [SOLID fica FÁCIL com Essas Ilustrações - YouTube](https://www.youtube.com/watch?v=6SfrO3D4dHM)
- [SOLID (O básico para você programar melhor) // Dicionário do Programador - YouTube](https://www.youtube.com/watch?v=mkx0CdWiPRA)
- [Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44 - YouTube](https://www.youtube.com/watch?v=vAV4Vy4jfkc&t=12s)

## 🦸 Autor  

<div>
	<a  href="https://github.com/janascher">
		<img  src="https://avatars.githubusercontent.com/u/79182711?v=4"  width="100px;"  alt="Janaína Scher"/>
		<br />
		<sub>
			<b>Janaína Scher</b> 👩🏻‍💻
		</sub>
	</a>
</div>  

Feito com ❤️ por Janaína Scher 👋 Entre em contato! 

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/janainascher/) [![ProtonMail Badge](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:janainascher@protonmail.com)
