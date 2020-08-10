// Cadastrar as rotas da aplicação

const express = require('express');
const { route } = require('./app');

// Responsável para fazer a roteirização no servidor
const routes = express.Router();

const alunoController = require('./Controllers/aluno');

// Rota de criação do aluno
routes.get("/alunos", alunoController.listar);
routes.get("/alunos/:id", alunoController.buscarPorId);
routes.post("/alunos", alunoController.store);

module.exports = routes; 
