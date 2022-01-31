import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
  query resources {
    resources {
      id
      title
      description
      link
      image
      section
      date
      user_id
      user {
        first_name
        last_name
        id
      }
      resourcescomments {
        id
        title
        description
        date
        user {
          id
          first_name
          last_name
        }
      }
    }
  }
`;
