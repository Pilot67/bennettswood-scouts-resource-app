import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  SignupIn,
  ErrorMessage,
} from "./Login.Styled";
import Auth from "../utils/auth";

const Login = ({handleSignUp}) => {

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const errMessage = "err"

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const  {data}  = await login({
        variables:  userFormData ,
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error)
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Title>Login</Title>
      <ErrorMessage>{errMessage}</ErrorMessage>
      <LoginForm onSubmit={handleLoginSubmit}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          value={userFormData.email}
        ></InputField>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          name="password"
          onChange={handleInputChange}
          type="text"
          placeholder="Password"
          value={userFormData.password}
        ></InputField>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </LoginForm>
        <SignupIn onClick={handleSignUp}>Not a member?</SignupIn>
    </>
  );
};

export default Login;
