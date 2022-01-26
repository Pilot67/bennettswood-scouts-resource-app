const express = require("express");
const sequelize = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./Schemas");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app, path: "/" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Now listening");
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
