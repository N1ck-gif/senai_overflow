'use strict';

// unique - diz que o campo vai ser unico
// allowNull - diz que nunca vai ser vazio

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Aqui dizemos o que deve ser feito

    return queryInterface.createTable('alunos', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      ra: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
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

    queryInterface.dropTable('alunos');
  }
};
