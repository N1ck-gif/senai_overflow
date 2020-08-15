const jwt = require("jsonwebtoken");
const authConfig = require("../Config/auth.json");

module.exports = ( req, res, next ) => {

    // Recupera o cabeçalho da requisição
    const { authorization } = req.headers;

    if( !authorization ){
        res.status(401).send({erro: "Token não informado"});
    }

    // Aqui estamos separando a palavra "Bearer" do id do aluno utlizando o método split e fazendo em forma de desestruturação
    const [ Bearer, token ]  = authorization.split(" ");

    if( !token ){
        res.status(401).send({erro: "Token mal formatado"});
    }
    
    try {

        const retorno = jwt.verify( token, authConfig.secret );

        req.alunoId = retorno.alunoId;

        return next();

    } catch (erro) {
        res.status(401).send({erro: "Token inválido"});
    }

    

}