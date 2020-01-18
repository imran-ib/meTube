import gql from "graphql-tag";

export const USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export const USER_REGISTER_MUTATION = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const USER_LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
export const USER_LOGOUT_MUTATION = gql`
  mutation {
    logoutUser {
      message
    }
  }
`;
export const REQUEST_RESET_MUTATION = gql`
  mutation($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
