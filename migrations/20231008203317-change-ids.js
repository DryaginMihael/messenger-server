'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'user_id', 'id');
    await queryInterface.renameColumn('Messages', 'message_id', 'id');
    await queryInterface.renameColumn('Chats', 'chat_id', 'id');
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
