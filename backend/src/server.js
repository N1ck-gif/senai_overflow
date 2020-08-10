// Incializando o express

const app = require('./app')

// listen() - vai ser responsável por rodar a aplicação
// O método precisa saber qual a porta o servidor vai rodar e uma função
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 