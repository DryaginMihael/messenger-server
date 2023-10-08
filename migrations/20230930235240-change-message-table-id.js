'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.createTable('Chats', {
    //   chat_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    //   chat_name: {
    //     type: Sequelize.STRING,
    //   },
    // });

    // await queryInterface.createTable('Users', {
    //   user_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
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
    //   email: {
    //     type: Sequelize.STRING,
    //     unique: true,
    //     allowNull: true,
    //   },
    //   role: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     defaultValue: 'USER'
    //   },
    // });

    // await queryInterface.removeColumn('Users', 'id');
    // await queryInterface.removeColumn('Users', 'user_id')

    // await queryInterface.addColumn('Users', 'user_id', {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     unique: true,
    // });

    // await queryInterface.addColumn('Users', 'email', {
    //     type: Sequelize.STRING,
    //     unique: true,
    //     allowNull: true,
    // });

    // await queryInterface.dropTable('Messages');
    // await queryInterface.createTable('Messages', {
    //   message_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    //   text: {
    //     type: Sequelize.TEXT,
    //   },
    //   chat_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Chats',
    //       key: 'chat_id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //   },
    //   user_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Users',
    //       key: 'user_id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //   },
    //   createdAt: {
    //     type: Sequelize.DATE,
    //   },
    //   updatedAt: {
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('Attachments', {
    //   file_path: {
    //     type: Sequelize.STRING, // Путь к файлу или URL
    //   },
    // });


    // await queryInterface.createTable('ChatMembers', {
    //   role: {
    //     type: Sequelize.STRING, // Например, "admin" или "member"
    //   },
    // });

    // await queryInterface.createTable('MessageStatuses', {
    //   status: {
    //     type: Sequelize.STRING, // Например, "read", "delivered", и т. д.
    //   },
    // });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.dropTable('Messages');
  }
};
