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
      validate: {
        len: [1],
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1],
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1],
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
    },
  });

  return Note;
};
