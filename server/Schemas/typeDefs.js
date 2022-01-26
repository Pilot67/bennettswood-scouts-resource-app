const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    user_type: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  }
  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      user_type: String!
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
