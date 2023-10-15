const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
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
    Message.belongsTo(models.User, { foreignKey: 'recipient_id' });
  };

  return Message;
};