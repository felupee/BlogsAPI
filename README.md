<p align="center">
  <img src="https://user-images.githubusercontent.com/94487469/233120368-21967424-fa44-4cee-b2d4-1a8931fe58ce.png">
</p>


Olá, seja bem vindo ao repositório do projeto BlogsAPI! Aqui você irá aprender como instalar e testar esse projeto na sua máquina, para desfrutar das mais diversas funções que esse projeto possui. Eu desenvolvi um projeto de API de blogs em Node.js que permite que os usuários publiquem seus próprios posts após fazer login. Para implementar todas as funcionalidades necessárias, utilizei o Sequelize - um poderoso ORM que oferece um CRUD completo.

Para garantir a segurança do sistema, implementei um sistema de login baseado na biblioteca JWT (JSON Web Token), que emite tokens de acesso para usuários autenticados. O MySQL também foi integrado ao projeto para gerenciar o banco de dados.

Com o Sequelize, consegui mapear as tabelas do banco de dados com objetos em JavaScript, o que me permitiu evitar a necessidade de escrever consultas SQL manualmente. Já o JWT se mostrou uma solução eficaz para proteger as informações do sistema, evitando ataques de hackers e garantindo que os tokens de acesso expirariam após um período determinado.

Com essa API de blogs, os usuários podem gerenciar facilmente seus posts com segurança. Tudo foi configurado para oferecer a melhor experiência possível, sem que o usuário precise se preocupar com questões técnicas. Além de que o projeto conta com modelo de desenvolvimento baseado em model, service e controller (MSC) no meu projeto por diversas razões. Primeiro, o MSC me permite organizar melhor o código do aplicativo em diferentes camadas, o que facilita a manutenção e evolução do projeto. Além disso, a separação clara de responsabilidades entre as camadas do MSC me ajuda a manter a lógica de negócios do aplicativo separada das operações de acesso e manipulação de dados.

Outra vantagem do MSC é que ele me permite testar o código do aplicativo de forma mais eficiente, pois cada camada pode ser testada de forma independente. Isso é particularmente útil quando se trabalha com aplicativos complexos ou em equipes, pois permite que diferentes desenvolvedores trabalhem em diferentes camadas do aplicativo sem interferir no trabalho dos outros.

Além disso, o MSC me permite implementar melhor as melhores práticas de segurança, como a validação de entrada de dados e a autenticação de usuários, sem misturar a lógica de negócios com a manipulação de dados. Por fim, o MSC é uma abordagem bem documentada e amplamente utilizada na indústria de desenvolvimento de software, o que facilita a colaboração com outros desenvolvedores e a integração do meu projeto com outras ferramentas e tecnologias.

## Como usar :computer: :rocket: 

Usando o Thunder Client ou uma ferramenta de sua escolha, você pode testar todas as rotas disponíveis no projeto.

### Requisitos :clipboard: 

Este projeto pode ser executado de duas formas distintas: a primeira exige a instalação do NODE, enquanto a segunda possibilita o uso do Docker para rodar em uma máquina virtual.

### Instalação :wrench:
#### Com docker:

- Rode o serviço `node` e `db` com o comando `ddocker-compose up -d --build`

Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code.

- Use o comando `docker exec -it blogs_api bash` e sigas passos abaixo.
Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Instale as dependências com `npm install`.

#### Sem docker:

- Instale as dependências com `npm install`

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

### Configuração :gear:

Depois de instalar as dependências, você vai precisar criar o banco de dados na qual a API vai consumir. Isso é bem simples porque utilizando o sequelize, com apenas um comando, todo o banco é criado o populado.

- Execute o comando `npm run prestart`.

Esse é um comando predefinido com scripts do sequelize, caso sinta curiosidade a mais, você pode consultar o `package.json` do projeto.

Observe abaixo o Diagrama de Entidade-Relacionamento do banco que você acabou de criar:

<img src="https://user-images.githubusercontent.com/94487469/233113092-d720ce59-3561-43fc-b09e-32ec22d1f917.png">

Com o banco criado e populado, basta rodar o comando `npm run start` para o server ficar online e você poder fazer requisições a vontade

### Execução :runner:

Depois de instalar as dependências, basta rodar o comando `npm run start` para o server ficar online e você poderá fazer requisições a vontade. Sugiro utilizar o `Thunder Client` ou alguma outra ferramenta de sua escolha. 
exemplo de rota do projeto: `http://localhost:3000/user`

## Contato :telephone_receiver:

Caso você tenha alguma dúvida sobre esse projeto ou queira da um feedback você encontra minha redes sociais no meu portifólio clicando [aqui](https://felupee.github.io/#contact).
