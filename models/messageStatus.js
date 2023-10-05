module.exports = (sequelize, DataTypes) => {
  const MessageStatus = sequelize.define('MessageStatus', {
    status: {
      type: DataTypes.STRING, // Например, "read", "delivered", и т. д.
    },
  });

  MessageStatus.associate = (models) => {
    MessageStatus.belongsTo(models.Message, { foreignKey: 'message_id' });
  };

  return MessageStatus;
};
