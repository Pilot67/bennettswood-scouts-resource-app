const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    user_type: String!
    authorised_user: Boolean
  }
  type Resources {
    id: Int!
    user_id: Int!
    title: String!
    description: String
    link: String
    image: String
    section: String
    date: String!
    user: User
  }

  type Auth {
    token: ID!
    user: User
    resources: Resources
  }

  type Query {
    users: [User]
    resources: [Resources]
    resource(id:Int):Resources
    resourceByUser(user_id:Int):[Resources]
  }
  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      user_type: String!
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      id: Int
      email: String
      password: String
      first_name: String
      last_name: String
      user_type: String
      authorised_user: Boolean
    ): Auth
    deleteUser(id: Int!): Auth
    deleteResource(id: Int!): Auth
  }
`;

module.exports = typeDefs;
