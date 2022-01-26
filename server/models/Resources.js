const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resources extends Model {}

Resources.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: URL,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: URL,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "resources",
  }
);

module.exports = Resources;
