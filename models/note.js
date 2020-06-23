module.exports = function (sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    gift: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING.BINARY,
      allowNull: true,
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Note;
};
