'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Messages', 'sender');
    await queryInterface.removeColumn('Messages', 'id');
    await queryInterface.addColumn('Messages', 'message_id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
