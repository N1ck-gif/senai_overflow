//Arquivo de Inicialização do banco de Dados

const Sequelize = require("sequelize");
const dbConfig = require("../Config/database");

const Aluno = require("../Models/Aluno");

//Instânciando a classe Sequelize e passando com argumento as configurações do banco de dados
const conexao = new Sequelize(dbConfig);

Aluno.init( conexao )

//Exportamos a conexão
module.exports = conexao;