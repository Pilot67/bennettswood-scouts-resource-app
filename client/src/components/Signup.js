import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  SignupIn,
} from "./Login.Styled";
import Auth from "../utils/auth";

const Signup = ({handleSignUp}) => {
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
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: userFormData,
      });
      console.log(data)

      Auth.login(data.addUser.token);

    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user_type: "LEADER",
    });
  };

  return (
    <>
      <Title>Sign Up</Title>
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
