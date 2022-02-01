import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { validateEmail } from "../utils/helpers";
import Auth from "../utils/Auth";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  SignupIn,
  ErrorMessage,
} from "./Login.Styled";

const Login = ({ handleSignUp }) => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    setErrMessage("");
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(userFormData.email)) {
      setErrMessage("Email is invalid");
      return;
    }
    if (userFormData.password.length < 8){
      setErrMessage("Password is too short")
      return;
    }


    try {
      const { data } = await login({
        variables: userFormData,
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
      setErrMessage("Invalid Credentials - Try again!");
      clearForm();
    }
    clearForm();
  };

  const clearForm = () => {
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
