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

export const GET_USER = gql`
mutation user ($id:Int) {
	user(id:$id) {
		id
		email
		first_name
		last_name
		password
		user_type
		authorised_user
	}
}
`
export const UPDATE_USER = gql`
mutation updateUser(
	$id: Int!
	$firstName: String
	$lastName: String
	$authorisedUser: Boolean
	$email: String
	$userType: String
) {
	updateUser(
		id: $id
		first_name: $firstName
		last_name: $lastName
		email: $email
		authorised_user: $authorisedUser
		user_type: $userType
	) {
		user {
			id
			first_name
			last_name
			email
			password
			user_type
			authorised_user
		}
	}
}
`
export const DELETE_USER = gql`
mutation deleteUser($id:Int!){
	deleteUser(id: $id) {
		user {
			id
		}
	}
}
`


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

export const ADD_RESOURCE = gql`
  mutation addResource(
    $title: String!
    $description: String
    $link: String
    $image: String
    $section: String
  ) {
    addResource(
      title: $title
      description: $description
      link: $link
      image: $image
      section: $section
    ) {
      message
    }
  }
`;

export const EDIT_RESOURCE = gql`
  mutation editResource(
    $id: Int!
    $title: String
    $description: String
    $link: String
    $image: String
    $section: String
  ) {
    editResource(
      id: $id
      title: $title
      description: $description
      link: $link
      image: $image
      section: $section
    ) {
      message
    }
  }
`;
