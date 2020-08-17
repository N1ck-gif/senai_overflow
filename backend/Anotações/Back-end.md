# Arquitetura de aplicações

## Conceitos

**API** - Se uma Interface de um sistema é criada para que um usuário final possa usa-la, a API é desenvolvida para que o sistema possa usar as funcionalidades de um outro sistema. A API é a Interface ideal para que um sistema se comunique com outro sistema.

**Interface** - o termo interface _(ou protocolo)_ é uma referência à característica que permite a construção de interfaces que isolam do mundo exterior os detalhes de implementação de um componente de software.

**API Rest** - Rest esta ligado ao desenvolvimento de aplicações Web ou Web Services, que fazem a comunicação através do protocolo HTTP.

A idéia principal do Rest é poder fazer através de simples chamadas HTTP a manipulação básica dos dados de uma aplicação.

**Web Services** - Web Service é uma solução utilizada na integração de sistemas e na comunicação entre aplicações diferentes. Com esta tecnologia é possível que novas aplicações possam interagir com aquelas que já existem e que sistemas desenvolvidos em plataformas diferentes sejam compatíveis.

**EndPoint** - O EndPoint é o que o serviço expoem. Ele tem 3 principais características:
-Address - Onde o serviço está hospedado
-Binding - Como o serviço pode ser acessado
-Contract - O que pode ser visto no serviço

O navegador manda um requisição para o servidor
E o servidor devolve a reposta com os dados da página
Isso é uma aplicação Monolitica
O servidor é o que gera códigos HTML e a regra de negócio

**Single Page Aplication** - é uma aplicação onde você carrega boa parte da página de uma vez na tela. Normalmente você tem apenas um aquivo HTML e o resto é importado pelo JS. Isso melhora na fluidez do site


Todo processamento do site fica do lado do servidor

**REACT JS** - Uma biblioteca para trabalhar com single pag app

O HTTP sempre é composto por uma requisição e uma resposta

Sempre que o Navegador fazer uma requisição para alguma url, ela sempre vai ser em método GET

No Body é onde vai ser carregado os dados
Os dados que vão no corpo dessa resposta ela pode ter vários formatos

Os dados que ficam na URL são query parameters

**NODE JS** - Runtime Javascript, roda do lado do servidor

O comando "node" é usado para executar arquivos JavaScript no computador

O POSTMAN serve para testar as requisições

A API Rest funciona em camadas então é útil se usar o padrão MVC

Existem 3 formas de trabalhar com Banco de Dados:
- query Nativas - escreve a query e manda executar
- query Builders - contrói as query e vai chamando as funções(no node tem como exemplo o Knex)
- ORM (Sequelize) - abstrair a camada de banco de dados

**********************

**NPM** - Gerenciador de pacotes no nodeJS

O NPM vai fazer a instalação dos pacotes, das bibliotecas, inicializar a aplicação, rodar scripts, entre outros...

node init -y - cria um pacote no formato json das nossas configurações. O '-y' diz sim para todas as perguntas que ele faria

**npm install express** - instala o pacote express

**package-lock.json** - roda a versão do pacote que está sendo usada

O pacote express vai roda o protocolo http

**listen()** - app que vai ser responsável por rodar a aplicação

**CTRL+C(no terminal)** - reinicia o servidor
_Se o noedemon estiver instalado, este comando serve para parar o servidor_

# Inicializando o Servidor

- Abrir a janela do Power Shell dentro da pasta - **shift + botão direito do mouse**

- Verificar se o nodeJS está instalado - **node -v ( mostra a versão do nodeJS )**

- Verificar se o npm está instalado - **npm -v ( mostra a versão do npm )**

- Inicializar o projeto node - **npm init -y** _( após digitar este comando, automaticamente ele criará um package.json. lá estará algumas configurações do nosso projeto )_

A principal funcionalidade do package.json é armazenar todos os pacotes que o projeto irá utilizar  

# Instalando um Servidor

Instalar o pacote express - **npm install express**

O express é um micro-framework para gerar servidores http

Ao executar o comando, ele gerará um arquivo chamado "package.-lock.json". Esse arquivo será responsável pelo armazenamento das versões das dependencias do projeto, para que no futuro, quando outro desenvolvedor for usar, usar especificadamente essas versões

# Pasta SRC

Todos os arquivos de códigos ficaram na pasta src

Para rodar um script no node, basta entrar no terminal, digitar **node "nomeDoDiretorio"**

# Instalando o nodemon

O nodemon serve para reiniciar o servidor de forma automática

Instalar o pacote nodemon - **npm install nodemon -D** _(-D : vai ser instalado como dependencia de desenvolvimento)_

Executar o nodemon ou qualquer outro pacote - **npx nodemon .\src\server.js**

Toda vez que for rodar o script dev no ambiente de desenvolvimento, vai executar o nodemon
"dev": "nodemon src/server.js"

# Criação de Rotas

Usando o método GET para cadastrar no servidor

**"/"** - indica que é a rota raiz

o método get pede uma função, onde ele tem os parâmetros requisição e resposta

**request - requisição**
**response - reposta**

**Exemplo:**
    app.get("/", (request,response) => {
        response.send(pessoa);
    });

# Funções usadas na Controller

Normalmente no Controller temos algumas funções como:
- index( requisição, resposta ){} - Listagem
- store( requisição, resposta ){} - Inserir
- update( requisição, resposta ){} - Atualizar
- delete( requisição, resposta ){} - Deletar

Essas funções recebem como parâmetro a requisição e a resposta

O **./** na hora do import, significa que eu quero acessar algum conteúdo que esta dentro da mesma pasta

# Instalando o ORM

Instalar o Sequelize, Sequelize-cli e o mysql2 - **npm install sequelize, sequelize-cli, mysql2**

# ORM

ORM é o mapeamento objeto relacional.

Consiste basicamente em mapear os dados e a estrutura do banco em objetos no nosso projeto.

Exemplo:
    Tabela pessoa

    Nome Idade Sexo

    class pessoa {
        String nome;
        Int idade;
        String sexo

        public save(){
            // Inserir no banco de dados
        }
    }

Exemplos de ORMs
- Pyton - Flex
- Ruby - Rail 
- Java - Hibernate
- PHP - Eloquent
- Typescript - Typeom
- Javascript - Sequelize 

**npm run dev** - roda o servidor no nodemon

# Manipulando o Banco de Dados pelo Sequelize

**npx sequelize -h** - mostra todos os comandos que podemos usar no sequelize

**npx sequelize db:create** - cria um database

**npx sequelize migration:create --name nome-arquivo** - cria um arquivo de migração

**npx sequelize db:migrate** - executa a migration

**npx sequelize db:migrate:undo** - executa a versão anterior do projeto
_Obs: a versão foi configurada no arquivo "database.js"_

As migrations estão sendo configuradas nos arquivos .sequelizerc 

**ctrl + shift + p** - abre uma aba de pesquisa do vsCode
**shift + alt + seta para baixo** - duplica a linha

A função do Router é mandar a requisição para a controller apropriada

# Criando uma Migration

**npx sequelize migration:create --name "nome-da-migration"** - cria uma migration

# Criando a funcionalidade Postagem

1. npx sequelize migration:create --name "nome-da-migration" - executar este comando para criar a migration
    Lá serão configuradas a criação da Tabela e dos campos

2. Criar na Model a classe "Postagem - Lá será onde vamos mapear o banco de dados

3. Criar na Controller o arquivo postagem.js - ela vai intermediar entre o arquivo "routes.js" e o banco de dados que está na model

4. Configurar a rota da aplicação no arquivo "routes.js" 

# Criando a funcionalidade de apagar a postagem

Sempre quando vamos deletar ou desativar algo utilizamos o método **DELETE**

1. Entre na pasta controller e crie o método delete

2. Configure a rota da aplicação no arquivo routes.js

# Async e Await

O JavaScript executa os códigos de forma assincrona, então ele não espera uma linha de comando terminar de ser executada para ir para a próxima.

Quando colocamos o await, dizemos para o JS que deve esperar aquela linha terminar de executar para ir para a próxima.

Quando não colocamos o await, o resultado vai ser uma promisse ou vazio

Quando colocamos o async no começo da função, estamos dizendo que esta função pode ser pausada para esperar um retorno



# Autorização

**Basic Auth** - pede um usuário e senha no cabeçalho da requisição. Ele envia duas informações, o prefixo que é o tipo de autorização e um dado embaralhado, que é a codificação do usuário e senha passados

**Bearer Token** - Estabelece uma maneira compactada para transmitir um objeto JSON, garante a segurança das informações e é utilizado para trafegar dados de autenticação entre dois clientes.

**JWT** - padrão de mercado que defini como transmitir e armazenar objetos JSON de forma compacta e segura entre diferentes aplicações. Ele é formado por 3 seções: HEADER, PAYLOAD E SIGNATURE

No **HEADER** temos:
- Algoritmo de criptografia que esta sendo usado
- Tipo de autenticação

No **PAYLOAD** temos:
- id do usuário(sub)
- emissor do Token(iss)
- data da expiração(exp)

No **SIGNATURE** temos:
- chave secreta da aplicação(secret)

# Implementando o JWT

1. Instalar 2 pacotes:
- **jsonwebtoken npm** - irá facilitar a criação do JWT
- **bcrypt.js** - Gerar um rash da nossa senha 
    _(npm install jsonwebtoken bcryptjs)_

_Para verificar se o pacote foi instalado, basta ir no package.json e procurar pelo nome_

2. Configurar no POSTMAN a sessao de autenticação (pasta sessao)

3. Configurar a rota no arquivo routes.js

4. Configurar a Controller no arquivo sessao.js

O hash é algo que é gerado e não tem retorno, ou seja, não tem como descriptografar

**Token** - serve para verificar se a requisição que estamos enviando para nossa api ela pode ser atendida ou não

O arquivo auth.json vai guardar a chave da nossa aplicação em formato de rash

O JWT é uma aplicação que foi criada para não precisar usar o banco de dados

Para proteger as nossas rotas, usamos a estratégia de Middlewares

Middlewares - algo que vai rodar antes ou no meio de alguma coisa




-------------------------------------------------------------------

**React** - é uma biblioteca JavaScript para construção de interfaces de usuário.

Tudo no React é baseado em componentes.

npx create-react-app nomeProjeto - cria um projeto React




Duvidas para segunda:
    -como funciona o await
    -se eu insiro o token da Maisa na hora de listar a postagem, pq tambem carrega a do Gustavo?
    - para que serve o postman?
