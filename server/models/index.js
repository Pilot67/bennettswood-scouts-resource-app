const User = require("./User");
const Resources = require("./Resources");
const ResourcesComments = require("./ResourceComments");

User.hasMany(Resources, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Resources.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

User.hasMany(ResourcesComments, {
  foreignKey:"user_id",
  onDelete:"CASCADE"
})

ResourcesComments.belongsTo(User,{
  foreignKey:"user_id",
})

Resources.hasMany(ResourcesComments, {
  foreignKey:"resources_id",
  onDelete: "CASCADE"
})

ResourcesComments.belongsTo(Resources, {
  foreignKey:"resources_id",
  onDelete:"CASCADE"
})

module.exports = { User, Resources, ResourcesComments };
