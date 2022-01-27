const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ResourcesComments extends Model {}

ResourcesComments.init(
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
    resources_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "resources",
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
    modelName: "resourcescomments",
  }
);

module.exports = ResourcesComments;
