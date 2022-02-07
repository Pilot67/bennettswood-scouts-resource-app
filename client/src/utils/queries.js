import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
  query resources ($filter:String){
    resources (filter:$filter){
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

export const GET_USER = gql`
query user($id:Int) {
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
`;


export const GET_ALL_USERS = gql`
query getAllUsers{
	getAllUsers {
		id
		email
		first_name
		last_name
		user_type
		authorised_user
	}
}
`