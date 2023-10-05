'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'id');
    await queryInterface.addColumn('Users', 'user_id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    });
    await queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
