'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('ChatMembers', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    })
    await queryInterface.removeColumn('ChatMembers', 'ChatId') 
    await queryInterface.removeColumn('ChatMembers', 'UserId')
    await queryInterface.removeColumn('ChatMembers', 'createdAt') 
    await queryInterface.removeColumn('ChatMembers', 'updatedAt')
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
