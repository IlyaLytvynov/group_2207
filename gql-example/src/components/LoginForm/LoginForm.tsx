import * as React from "react";
import { Paper, Input } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const LOGIN_MUTATION = gql`
mutation LogIn($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

export const LoginForm: React.FC<any> = () => {
  const [logIn, { data }] = useMutation(LOGIN_MUTATION);
  console.log(data);
  const clickHandler = () => {
    logIn({variables: {email: 'john.doe.55@test.com', password: '123'}})
  }
  return <button onClick={clickHandler}>Login</button>;
}