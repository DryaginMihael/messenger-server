// models/user.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER'
      },
    });

    // Определение отношений
    User.associate = (models) => {
      User.belongsToMany(models.Chat, { through: models.ChatMember });
      User.hasMany(models.Message, { foreignKey: 'user_id' });
    };
  
    return User;
};
  