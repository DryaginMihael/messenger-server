'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'user_id');
    await queryInterface.addColumn('Users', 'user_id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    })
    await queryInterface.addColumn('Messages', 'chat_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Chats', // Имя связанной таблицы (по умолчанию, измените на своё)
        key: 'chat_id', // Имя связанного столбца (по умолчанию, измените на своё)
      },
      onUpdate: 'CASCADE', // Опционально, настройте в соответствии с вашей логикой
      onDelete: 'CASCADE', // Опционально, настройте в соответствии с вашей логикой
    })
    await queryInterface.addColumn('Messages', 'user_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Имя связанной таблицы (по умолчанию, измените на своё)
          key: 'user_id', // Имя связанного столбца (по умолчанию, измените на своё)
        },
        onUpdate: 'CASCADE', // Опционально, настройте в соответствии с вашей логикой
        onDelete: 'CASCADE', // Опционально, настройте в соответствии с вашей логикой
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
