//Este arquivo configura a aplicação

// Importando o express para que a aplicação rode no servidor criado
const express = require('express');
const cors = require("cors");
require("./Database");
const rotas = require('./routes');

// Iniciando a aplicação
const app = express();

// Habilitar o cors para qualquer origem
app.use(cors());

// Diz que nas requisições pode ter corpos no formato JSON
app.use( express.json() );

// Cadastrando as rotas
app.use(rotas);

module.exports = app;