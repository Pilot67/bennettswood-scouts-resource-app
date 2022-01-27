const { merge } = require("lodash");
const typeDefs = require("./typeDefs");
const userResolvers = require("./Resolvers/userResolvers");
const resourcesResolvers = require("./Resolvers/resourcesResolvers");
const resourcesCommentsResolvers = require("./Resolvers/resourcesCommentsResolvers");
const resolvers = merge(
  userResolvers,
  resourcesResolvers,
  resourcesCommentsResolvers
);

module.exports = { typeDefs, resolvers };
