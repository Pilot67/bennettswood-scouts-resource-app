const {
    AuthenticationError,
    UserInputError,
  } = require("apollo-server-express");
  const { User, Resources, ResourcesComments } = require("../../models");
  
  const resourcesCommentsResolvers = {
    Mutation: {
      addResourceComment: async(root, args, context) =>{
        if (context.user){
          try{
            const newComment = await ResourcesComments.create({
              user_id:context.user.id,
              ...args,
            })
            console.log(newComment)
            const updatedResources = await Resources.findByPk(args.resources_id, {
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
            return updatedResources
          }catch (e) {
            console.log(e)
            return e;
          }
        }
        throw new AuthenticationError("You need to be logged in! #2");
      },
      deleteResourcesComment: async (root, {id}, context)=>{
        if (context.user) {
          try {
            const deletedComment = await ResourcesComments.destroy({ where: { id } });
            if (deletedComment === 0) {
              throw new UserInputError("Incorrect ID! ");
            }
            return;
          } catch (e) {
            console.log(e);
            return e;
          }
        }
        throw new AuthenticationError("You need to be logged in! #2");
  
      }
    },
  };
  
  module.exports = resourcesCommentsResolvers;
  