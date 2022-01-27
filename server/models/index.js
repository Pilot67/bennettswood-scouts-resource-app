const User = require("./User");
const Resources = require("./Resources");


User.hasMany(Resources, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Resources.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = { User, Resources };
