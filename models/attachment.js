module.exports = (sequelize, DataTypes) => {
    const Attachment = sequelize.define('Attachment', {
        file_path: {
            type: DataTypes.STRING, // Путь к файлу или URL
        },
        // Другие поля модели
    });

    // Attachment.associate = (models) => {
    //     Attachment.belongsToMany(models.Message, { through: 'MessageAttachments' });
    // };
  
    return Attachment;
};
  