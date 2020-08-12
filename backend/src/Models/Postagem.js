// A chave estrangeira não dever ficar neste arquivo, deve fazer uma associção a elas
// modelName - Da um apelido para a classe

const { Model, DataTypes } = require('sequelize');

class Postagem extends Model {

    static init( sequelize ) {

        super.init (
            {
                titulo: DataTypes.STRING,
                descricao: DataTypes.TEXT,
                imagem: DataTypes.STRING,
                gists: DataTypes.TEXT,
            },
            {
                sequelize,
                tableName: "postagens"
            }
        );
    }

    // Este método faz associação com a classe Aluno
    static associate( models ) {
        // Uma postagem pertence a um aluno
        this.belongsTo( models.Aluno, {foreignKey: "created_aluno_id"} );

        this.hasMany(models.Comentario);
    }

}

module.exports = Postagem;