module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        // Другие поля модели
    });

    // Определение отношений
    Chat.associate = (models) => {
        Chat.belongsToMany(models.User, { through: models.ChatMember });
    };

    Chat.associate = (models) => {
        Chat.hasMany(models.Message, { foreignKey: 'message_id' });
    };
  
    return Chat;
};
  