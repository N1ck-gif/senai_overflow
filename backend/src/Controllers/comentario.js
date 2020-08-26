const Postagem = require("../Models/Postagem");
const { store, index } = require("./postagem");
const { findByPk } = require("../Models/Comentario");

module.exports = {

    async index(req, res){

        // recuperar o id da postagem
        const { postId } = req.params;

        const postagem = await Postagem.findByPk(postId);

        if( !postagem ) {
            return res.status(404).send({erro: "Postagem não encontrada"});
        }

        const comentarios = await postagem.getComentarios({
            include: {
                association: "Aluno",
                attributes: ["id", "nome"]
            },
            attributes: ["id", "descricao", "createdAt"],
            order: [["created_at", "DESC"]]
        });

        res.send(comentarios);

    },

    async store(req, res){

        // recuperar o id do usuário
        const aluno_id = req.alunoId;

        // recuperar o id da postagem
        const { postId } = req.params;

        // recuperar a descricao do comentario
        const { descricao } = req.body;

        // procurar a postagem pelo id
        const postagem = await Postagem.findByPk(postId);

        // se não existir, retornar erro
        if( !postagem ) {
            return res.status(404).send({erro: "Postagem não encontrada"});
        }

        // O id da postagem não precisa estar dentro do createComentario, ele já vai vir com o id da postagem porque estamos adicionando um comentário atráves dela 

        // criar o comentário usando o createComentario
        // passando o id do aluno e a descrição
        var comentario = await postagem.createComentario({
            descricao,
            aluno_id: aluno_id,
        });

        // Formatando o retorno
        // Pega só o valor do comentário
        comentario = comentario.dataValues;
        comentario.postagem_id = comentario.PostagemId;
        delete comentario.PostagemId;
        delete comentario.AlunoId;

        res.status(201).send(comentario);

    }

}