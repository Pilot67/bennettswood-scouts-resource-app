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
      if (context.user) {
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
              first_name,
              last_name,
              email,
              password,
              user_type,
              authorised_user,
            },
            {
              where: { id: id },
              individualHooks: true,
            }
          );
          try {
            const user = await User.findOne({ where: { id } });
            if (user === null) {
              throw new UserInputError("User Not Found!");
            }
            return { user };
          } catch (e) {
            return e;
          }
        } catch (e) {
          return e;
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
    deleteUser: async (root, { id }, context) => {
      if (context.user) {
        try {
          const deletedUser = User.destroy({ where: { id } });
          return;
        } catch (e) {
          console.log(e);
          return e;
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
  },
};

module.exports = resolvers;
