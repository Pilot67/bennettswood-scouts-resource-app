const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Equipment extends Model {}

Equipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    created_by_user_id: {
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    last_updated: {
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
    modelName: "equipment",
  }
);

module.exports = Equipment;
