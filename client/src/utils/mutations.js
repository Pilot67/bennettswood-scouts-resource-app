import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      token
      user {
        id
        first_name
        last_name
        email
        user_type
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $userType: String!
  ) {
    addUser(
      first_name: $firstName
      last_name: $lastName
      email: $email
      password: $password
      user_type: $userType
    ) {
      token
      user {
        id
        first_name
        last_name
        user_type
        password
      }
    }
  }
`;

export const DELETE_RESOURCE = gql`
  mutation deleteResource($id: Int!) {
    deleteResource(id: $id) {
      resources {
        id
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteResourcesComment($id: Int!) {
    deleteResourcesComment(id: $id) {
      user {
        id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addResourceComment(
    $resources_id: Int!
    $title: String!
    $description: String!
  ) {
    addResourceComment(
      resources_id: $resources_id
      title: $title
      description: $description
    ) {
      title
      description
      user {
        first_name
      }
      resourcescomments {
        title
        description
        date
      }
    }
  }
`;
