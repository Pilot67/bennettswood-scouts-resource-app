import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { validateEmail } from "../utils/helpers";
import Auth from "../utils/auth";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  SignupIn,
  ErrorMessage,
} from "./Login.Styled";

const Signup = ({ handleSignUp }) => {
  const [errMessage, setErrMessage] = useState("");
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "LEADER",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    setErrMessage("");
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(userFormData.email)) {
      setErrMessage("Email is invalid");
      return;
    }
    if (userFormData.password.length < 8){
      setErrMessage("Password is too short")
      return;
    }
    if (!userFormData.firstName || !userFormData.firstName){
      setErrMessage("First & nast name is required")
      return;
    }

    try {
      const { data } = await addUser({
        variables: userFormData,
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
      setErrMessage("Oops, something went wrong Try agian!");
    }
    clearForm()
  };

  const clearForm = () => {
    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      user_type: "LEADER",
    });
  };

  return (
    <>
      <Title>Sign Up</Title>
      <ErrorMessage>{errMessage}</ErrorMessage>
      <LoginForm onSubmit={handleSignupSubmit}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <InputField
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          value={userFormData.firstName}
        ></InputField>

        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <InputField
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          value={userFormData.lastName}
        ></InputField>

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

        <label htmlFor="leader">Leader</label>
        <input
          type="radio"
          id="leader"
          name="userType"
          value="LEADER"
          onChange={handleInputChange}
        />
        <label htmlFor="member">Member</label>
        <input
          type="radio"
          id="member"
          name="userType"
          value="MEMBER"
          onChange={handleInputChange}
        />

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </LoginForm>
      <SignupIn onClick={handleSignUp}>Already a member? Sign In</SignupIn>
    </>
  );
};
export default Signup;
