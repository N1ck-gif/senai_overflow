//Este arquivo configura a aplicação

// Importando o express para que a aplicação rode no servidor criado
const express = require('express');
require("./Database");
const rotas = require('./routes');

// Iniciando a aplicação
const app = express();

// Diz que nas requisições pode ter corpos no formato JSON
app.use( express.json() );

// Cadastrando as rotas
app.use(rotas);

module.exports = app;