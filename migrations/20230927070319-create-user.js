// migrations/YYYYMMDDHHMMSS-create-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.createTable('Users', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   username: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: true,
    //   },
    //   password: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   role: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
