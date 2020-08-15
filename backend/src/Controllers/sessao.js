const Aluno = require("../Models/Aluno");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../Config/auth.json");

module.exports = {
    async store(req, res){
        const { email, senha } = req.body;

        // Verificar se o aluno existe e se a senha está correta
        // SELECT * FROM aluno WHERE email = ?, senha = ?
        const aluno = await Aluno.findOne({
            where: {
                email: email,
            }
        });

        // Se o aluno não existir ou a senha estiver incorreta retorna erro
        if( !aluno || !await bcrypt.compare(senha, aluno.senha) ) {
            return res.status(401).send({erro: "Usuário e/ou senha inválidos"});
        }

        // Incializando o nosso Token
        const token = jwt.sign( { alunoId: aluno.id }, authConfig.secret );

        // Se existir e a senha estiver correta retorna OK com o token
        res.status(201).send({
            aluno: {
                alunoId: aluno.id, 
                nome: aluno.nome,
                ra: aluno.ra,
            },
            token: token
        });

    }
}