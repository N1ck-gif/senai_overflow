//Arquivo de Inicialização do banco de Dados

const Sequelize = require("sequelize");
const dbConfig = require("../Config/database");

const Aluno = require("../Models/Aluno");
const Postagem = require("../Models/Postagem");
const Postagem = require("../Models/Comentario");
const Comentario = require("../Models/Comentario");

//Instânciando a classe Sequelize e passando com argumento as configurações do banco de dados
const conexao = new Sequelize(dbConfig);

//Inicializando os models
Aluno.init( conexao );
Postagem.init( conexao );
Comentario.init( conexao );

//Inicializando as associações
Aluno.associate( conexao.models );
Postagem.associate( conexao.models );
Comentario.associate( conexao.models );


//Exportamos a conexão
module.exports = conexao;