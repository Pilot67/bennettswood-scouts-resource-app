const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    addUser: async (root, { first_name , last_name, email, password, user_type}) => {
      try {
        const user = await User.create({ first_name ,last_name, email, password, user_type});
        const token = signToken(user);
        console.log(token)
        return user;
      } catch (e) {
        console.log(e);
        return (e)
      }
    },
  },
};

module.exports = resolvers;
