const express = require("express");
const sequelize = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./Schemas");
const { authMiddleware } = require("./utils/auth");
require("dotenv").config();
const path = require("path");

(async function () {
  const app = express();
  const PORT = process.env.PORT || 3001;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log("Now listening");
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
})();
