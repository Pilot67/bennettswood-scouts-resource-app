const sequelize = require("../config/connection");
const { User, Resources } = require("../models");
const userData = require("./userData.json");

//const userData = require("./userData.json");

const seedDatabase = async () => {
  try {
    console.log(sequelize);
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
       individualHooks: true,
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();