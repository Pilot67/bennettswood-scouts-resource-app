const sequelize = require("../config/connection");
const { User, Resources , ResourcesComments} = require("../models");
const userData = require("./userData.json");
const resourceData = require("./resourcesData.json");
const resourcesCommentsData = require("./resourcesComments.json");

//const userData = require("./userData.json");

const seedDatabase = async () => {
  try {
    console.log(sequelize);
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
       individualHooks: true,
    });

    const resources = await Resources.bulkCreate(resourceData, {
       individualHooks: true,
    });

    const resourcesComments = await ResourcesComments.bulkCreate(resourcesCommentsData, {
       individualHooks: true,
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();