const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
    },
    // Другие поля модели
  });

  Message.associate = (models) => {
    Message.belongsTo(models.Chat, { foreignKey: 'chat_id' });
    Message.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Message;
};