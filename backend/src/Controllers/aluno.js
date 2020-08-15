const { Op } = require("sequelize");
const Aluno = require("../Models/Aluno");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../Config/auth.json");

module.exports = {

    // Listar
    async listar( req, res ){

        const alunos = await Aluno.findAll();

        res.send( alunos );

    },

    // Buscar pelo ID
    async buscarPorId(req, res){
        const { id } = req.params;

        // Busca o aluno pela chave
        const aluno = await Aluno.findByPk(id);

        // Verifica se o aluno não foi encontrado
        if( aluno == null ){
            return res.status(404).send({erro: "Aluno não encontrado"});
        }

        aluno = aluno.getDataValue();

        await delete aluno.senha;

        // retora o aluno encontrado
        res.send( aluno );
    },

    // Inserir
    async store( req, res ){
        const { ra, nome, email, senha } = req.body;

        // Verificar se aluno já existe
            // select * from alunos where ra = ? or email = ?
        let aluno = await Aluno.findOne({
            where: {
                [Op.or]: [
                    { ra: ra },
                    { email: email }
                ]
            }
        });

        if( aluno ) {
            return res.status(400).send({erro: "Aluno já cadastrado"});
        }

        const senhaCripto = await bcrypt.hash(senha, 10);
        
        // Cadastrar aluno no banco de dados
        aluno = await Aluno.create( { ra, nome, email, senha: senhaCripto } );

        const token = jwt.sign( {alunoId: aluno.id}, authConfig.secret );

        res.status(201).send({
            aluno: {
                alunoId: aluno.id, 
                nome: aluno.nome,
                ra: aluno.ra,
            },
            token: token
        });
    },

    // Atualizar
    update( req, res ){

    },


    // Deletar
    delete( req, res ){

    },

}