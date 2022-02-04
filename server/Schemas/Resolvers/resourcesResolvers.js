const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Resources, ResourcesComments } = require("../../models");
const { Op } = require("sequelize");

const resourcesResolvers = {
  Query: {
    resources: async (root, { filter }) => {
      let whereClause = { [Op.ne]: null };
      if (filter) {
        whereClause = filter;
      }
      return await Resources.findAll({
        order: [["date", "DESC"]],
        where: {
          section: whereClause,
        },
        include: [
          {
            model: User,
          },
          {
            model: ResourcesComments,
            include: [
              {
                model: User,
              },
            ],
          },
        ],
      });
    },
    resource: async (root, { id }, context) => {
      if (context.user) {
        return await Resources.findByPk(id, {
          include: [
            {
              model: User,
            },
            {
              model: ResourcesComments,
              include: [
                {
                  model: User,
                },
              ],
            },
          ],
        });
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
    resourceByUser: async (root, { user_id }, context) => {
      if (context.user) {
        return await Resources.findAll({
          where: { user_id },
          include: [
            {
              model: User,
            },
            {
              model: ResourcesComments,
              include: [
                {
                  model: User,
                },
              ],
            },
          ],
        });
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
  },

  Mutation: {
    deleteResource: async (root, { id }, context) => {
      if (context.user) {
        try {
          const deletedResource = await Resources.destroy({ where: { id } });
          if (deletedResource === 0) {
            throw new UserInputError("Incorrect ID! ");
          }
          return;
        } catch (e) {
          console.log(e);
          return e;
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
    addResource: async (root, args, context) => {
      if (context.user) {
        try {
          const newResource = await Resources.create({
            user_id: context.user.id,
            ...args,
          });
          return newResource;
        } catch (e) {
          return e;
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
    editResource: async (
      root,
      { id, title, description, link, image, section },
      context
    ) => {
      console.log(id, title, description, link, image, section);
      if (context.user) {
        try {
          const editResource = await Resources.update(
            { user_id: context.user.id, title, description, link, image, section },
            {
              where: { id },
              individualHooks: true,
            }
          );
          return;
        } catch (e) {
          return e;
        }
      }
      throw new AuthenticationError("You need to be logged in! #2");
    },
  },
};

module.exports = resourcesResolvers;
