import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      token
      user {
        first_name
        last_name
        email
        user_type
      }
    }
  }
`;
