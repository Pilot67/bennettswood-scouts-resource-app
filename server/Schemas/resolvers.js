const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    addUser: async (
      root,
      { first_name, last_name, email, password, user_type }
    ) => {
      try {
        const user = await User.create({
          first_name,
          last_name,
          email,
          password,
          user_type,
        });
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        console.log(e);
        return e;
      }
    },
    login: async (root, { email, password }) => {
      const user = await User.findOne({
        where: { email: email },
      });
      if (!user) {
        throw new UserInputError("Incorrect credentials");
      }
      const correctPw = await user.checkPassword(password);
      if (!correctPw) {
        throw new UserInputError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (
      root,
      {
        id,
        first_name,
        last_name,
        email,
        password,
        user_type,
        authorised_user,
      },
      context
    ) => {
      console.log(
        context.user,
        `id: ${id}, first_name: ${first_name}, authorised_user: ${authorised_user}`
      );
      if (context.user) {
        console.log("Past #1");
        if (context.user.user_type === "ADMIN" && !id) {
          id = context.user.id;
        } else if (context.user.user_type !== "ADMIN") {
          id = context.user.id;
          user_type = undefined;
          authorised_user = undefined;
        }
        try {
          const updatedUser = await User.update(
            {
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password,
              user_type: user_type,
              authorised_user: authorised_user,
            },
            {
              where: { id: id },
            }
          );
          try {
            const user = await User.findOne({ where: { id } });
            if (user===null){
              throw new UserInputError("User Not Found!")
            }
            return { user };
          } catch (e) {
            return (e)
          }
        } catch (e) {
          throw new AuthenticationError("You need to be logged in! #1");
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
  },
};

module.exports = resolvers;
