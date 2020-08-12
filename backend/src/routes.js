// Cadastrar as rotas da aplicação

const express = require('express');
const { route } = require('./app');

// Responsável para fazer a roteirização no servidor
const routes = express.Router();

const alunoController = require('./Controllers/aluno');
const postagemController = require('./Controllers/postagem');
const comentarioController = require('./Controllers/comentario');

// Rotas de criação do aluno
routes.get("/alunos", alunoController.listar);
routes.get("/alunos/:id", alunoController.buscarPorId);
routes.post("/alunos", alunoController.store);

// Rotas de postagens
routes.post("/postagens", postagemController.store);
routes.get("/postagens", postagemController.index);
routes.delete("/postagens/:id", postagemController.delete);

// Rotas de comentários
routes.post("/postagens/:postId/comentarios", comentarioController.store);

module.exports = routes; 
