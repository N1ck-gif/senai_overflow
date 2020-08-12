/* 
    super - significa que quer chamar algum método da classe pai

    O método "init" esta servindo para mapear os campos da nossa tabela no db
    O método "init" recebe como parâmetros os campos da tabela e a conexão com o B.D
    Obs: a conexão esta sendo passada no arquivo "index.js" e esta sendo recebida pelo "sequelize"

    Os campos que são inseridos automáticos não fica dentro do mapeamento

*/

const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {

    static init( sequelize ) {

        super.init ({
            ra: DataTypes.STRING,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            sequelize
        })
    }

    // Este método faz associação com a classe Postagem
    static associate(models) {
        // O aluno tem muitas postagens
        this.hasMany(models.Postagem, { foreignKey: "created_aluno_id" });

        this.hasMany(models.Comentario);
    }

}

module.exports = Aluno;