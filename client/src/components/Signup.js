import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
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
  RadioButton,
  RadioContainer,
  Group,
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
    if (userFormData.password.length < 8) {
      setErrMessage("Password is too short");
      return;
    }
    if (!userFormData.firstName || !userFormData.lastName) {
      setErrMessage("First & last name is required");
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
    clearForm();
  };

  const clearForm = () => {
    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "LEADER",
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
          type="password"
          placeholder="Password"
          value={userFormData.password}
        ></InputField>

        <Group>
          <RadioContainer>
            <RadioButton
              value="MEMBER"
              id="member"
              name="userType"
              type="radio"
              onChange={handleInputChange}
            />
            <label htmlFor="member">Member</label>
          </RadioContainer>
          <RadioContainer>
            <RadioButton
              value="LEADER"
              id="leader"
              name="userType"
              type="radio"
              defaultChecked="LEADER"
              onChange={handleInputChange}
            />
            <label htmlFor="leader">Leader</label>
          </RadioContainer>
        </Group>

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </LoginForm>
      <SignupIn onClick={handleSignUp}>Already a member? Sign In</SignupIn>
    </>
  );
};
export default Signup;
