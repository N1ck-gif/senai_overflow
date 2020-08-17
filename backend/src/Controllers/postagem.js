/* 
    Para a nossa requisição de postagem nós vamo enviar um Token 

    Depois de ir no postman, selecionar o tipo Bearer e colocar um id no Token, nosso cabeçalho passa a ter um novo campo no cabeçalho da nossa requisição

    split - dividi a string baseada em algum separador

    o retorno do Token é "Bearer 1"

    No postman, o que deve ser colocado no Token, é o id do aluno

*/

const Postagem = require("../Models/Postagem.js");
const Aluno = require("../Models/Aluno");

module.exports = {

    // Lista as postagens
    async index(req, res){

        // Lista todas as postagens
        const postagens = await Postagem.findAll({
            // Retorna os dados do aluno que fez a postagem
            include: {
                association: "Aluno",
                attributes: ["id", "nome", "ra"]
            },

            // ordena as postagens
            order: [["created_at", "DESC"]]
        });

        // Envia a lista
        res.send(postagens);

    },

    // Adiciona uma postagem
    async store( req, res ){

        // Pega o id do aluno logado
        const created_aluno_id = req.alunoId;

        // Pega o que esta no corpo da requisição
        const { titulo, descricao, imagem, gists } = req.body;

        try {

            const aluno = await Aluno.findByPk(created_aluno_id);

            // Verifica se a postagem está relacionada a um aluno criado 
            // Se o aluno não existir, ele retorna uma mensagem de erro
            if( !aluno ){
                res.status(404).send({erro: "Aluno não encontrado"});
            }

            // Cria uma nova postagem
            let postagem = await aluno.createPostagem({ 
                titulo, 
                descricao, 
                imagem, 
                gists, 
                created_aluno_id 
            });

            // Envia o post
            res.status(201).send(postagem);
        } catch (error) {

            // Verifica se a postagem está relacionada a um aluno criado 
            // Se o aluno não existir, ele retorna uma mensagem de erro
            return res.status(500).send({erro: "Não foi possível adicionar a postagem, tente novamente mais tarde"});

        }

    },

    // Deleta uma postagem
    async delete(req, res) {
        //pegando o id do aluno que está logado
        const created_aluno_id = req.alunoId;

        // pegando o id da postagem para apagar
        const { id } = req.params;

        //procura a postagem pelo id
        let postagem = await Postagem.findByPk(id);

        // se a postagem não existir, retorna not found
        if( !postagem ) {
            return res.status(404).send({ erro: "Postagem não encontrada" });
        }

        //return console.log(postagem.created_aluno_id, created_aluno_id, id); 
        if( postagem.created_aluno_id != created_aluno_id ) {
            return res.status(401).send({erro: "Você não tem permissão para excluir essa postagem"});
        }

        // efetua a exclusão da postagem
        await postagem.destroy();

        res.status(204).send();
    }
    
}