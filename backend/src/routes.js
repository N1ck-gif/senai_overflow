// Cadastrar as rotas da aplicação

const express = require('express');
const { route } = require('./app');

// Responsável para fazer a roteirização no servidor
const routes = express.Router();

const alunoController = require('./Controllers/aluno');
const postagemController = require('./Controllers/postagem');
const comentarioController = require('./Controllers/comentario');
const sessaoController = require('./Controllers/sessao');
const autorizacaoMid = require("./Middlewares/autorizacao");

// Rotas Públicas
routes.post("/sessao", sessaoController.store);
routes.post("/alunos", alunoController.store);

// Tudo o que está acima do Middleware é executado, tudo o que está a baixo, não são executados pois o Middleware bloqueia a execução

// Quando eu quero falar que vai ter um Middlewares ali no meio, utiliza-se o método use()
routes.use( autorizacaoMid );

// Rotas Privadas

// Rotas de criação do aluno
routes.get("/alunos", alunoController.listar);
routes.get("/alunos/:id", alunoController.buscarPorId);

// Rotas de postagens
routes.post("/postagens", postagemController.store);
routes.get("/postagens", postagemController.index);
routes.delete("/postagens/:id", postagemController.delete);

// Rotas de comentários
routes.get("/postagens/:postId/comentarios", comentarioController.index);
routes.post("/postagens/:postId/comentarios", comentarioController.store);

module.exports = routes; 
