import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import {
  InputField,
  InputLabel,
  LoginForm,
  LoginTitle,
  SubmitBtn,
} from "./Login.Styled";
import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(userFormData)
      const  {data}  = await login({
        variables:  userFormData ,
      });
      console.log(data);
//      Auth.login(data.login.token);

    } catch (error) {
      console.error(error)
    }

    // setUserFormData({
    //   email: "",
    //   password: "",
    // });
  };


  

  return (
    <div>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
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
        <SubmitBtn onClick={handleLoginSubmit}>Submit</SubmitBtn>
      </LoginForm>
    </div>
  );
};

export default Login;
