'use strict';

// unique - diz que o campo vai ser unico
// allowNull - diz que nunca vai ser vazio

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Aqui dizemos o que deve ser feito
    return queryInterface.createTable("comentarios", {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      // Chave estrangeira
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "alunos", 
          key: "id"
        },
        // Diz que se atualizar o id do aluno as postagens vão ser atualizadas junto
        onUpdate: "CASCADE",
        // Diz que se deletar o id do aluno as postagens vão ser deletadas junto
        onDelete: "CASCADE",
      },

      postagem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "postagens",
          key: "id"
        },
        // Diz que se atualizar o id do aluno as postagens vão ser atualizadas junto
        onUpdate: "CASCADE",
        // Diz que se deletar o id do aluno as postagens vão ser deletadas junto
        onDelete: "CASCADE",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    //Aqui dizemos o que deve ser desfeito

    queryInterface.dropTable("comentarios");
  }
};
