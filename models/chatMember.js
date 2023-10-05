module.exports = (sequelize, DataTypes) => {
    const ChatMember = sequelize.define('ChatMember', {
      role: {
        type: DataTypes.STRING, // Например, "admin" или "member"
      },
      // Другие поля модели
    });

    return ChatMember;
}
