import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATE_USER } from "../utils/mutations";
import { GET_USER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { validateEmail } from "../utils/helpers";
import Auth from "../utils/Auth.js";

import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  ErrorMessage,
  RadioButton,
  RadioContainer,
  Group,
} from "./Login.Styled";

const NewUserForm = ({ getUserId }) => {
  console.log("from NewUserForm: ", getUserId);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [formEdit, setFormEdit] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "LEADER",
    newData: false,
  });

  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { id: getUserId },
    refetchOnMount: "always",
    force: true,
  });
  const userData = data?.user || [];

  //this loading routing is required for the initial data
  if (loading && !isLoading) {
    setIsLoading((prev) => !prev);
  } else if (!loading && isLoading) {
    setIsLoading((prev) => !prev);
    setUserFormData({
      firstName: userData.first_name,
      lastName: userData.last_name,
      email: userData.email,
      userType: userData.user_type,
    });
  }

  const handleInputChange = (event) => {
    setFormEdit(true);
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    setErrMessage("");
  };

  useEffect(() => {
    console.log("Data from useEffect");
    setUserFormData({
      firstName: userData.first_name,
      lastName: userData.last_name,
      email: userData.email,
      userType: userData.user_type,
    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!userFormData.firstName || !userFormData.lastName) {
      setErrMessage("First & last name is required");
      return;
    }
    if (!validateEmail(userFormData.email)) {
      setErrMessage("Email is invalid");
      return;
    }

    try {
      const { data } = await updateUser({
        variables: { id: userData.id, ...userFormData },
      });
    } catch (e) {
      console.error(e.message);
    }

    if (Auth.getProfile().data.user_type === "ADMIN") {
      navigate("/AllUsers");
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return <>Loading Data</>;
  }

  return (
    <>
      <Title style={{ color: "#fff" }}>Your account details</Title>
      <ErrorMessage>{errMessage}</ErrorMessage>
      <LoginForm onSubmit={handleFormSubmit}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <InputField
          style={formEdit ? null : { color: "#fff" }}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          value={userFormData.firstName}
          disabled={!formEdit}
        ></InputField>

        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <InputField
          style={formEdit ? null : { color: "#fff" }}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          value={userFormData.lastName}
          disabled={!formEdit}
        ></InputField>

        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          style={formEdit ? null : { color: "#fff" }}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          value={userFormData.email}
          disabled={!formEdit}
        ></InputField>
        <Group>
          <RadioContainer>
            <RadioButton
              value={userFormData.userType}
              id="member"
              name="userType"
              type="radio"
              onClick={() =>
                setUserFormData({ ...userFormData, userType: "MEMBER" })
              }
              defaultChecked={
                userFormData.userType === "MEMBER" ? "MEMBER" : null
              }
            />
            <label htmlFor="member">Member</label>
          </RadioContainer>
          <RadioContainer>
            <RadioButton
              value={userFormData.userType}
              id="leader"
              name="userType"
              type="radio"
              defaultChecked={
                userFormData.userType === "LEADER" ? "LEADER" : null
              }
              onClick={() =>
                setUserFormData({ ...userFormData, userType: "LEADER" })
              }
            />
            <label htmlFor="leader">Leader</label>
          </RadioContainer>
          <RadioContainer>
            <RadioButton
              value={userFormData.userType}
              id="admin"
              name="userType"
              type="radio"
              defaultChecked={
                userFormData.userType === "ADMIN" ? "ADMIN" : null
              }
              onClick={() =>
                setUserFormData({ ...userFormData, userType: "ADMIN" })
              }
              disabled={Auth.getProfile().data.user_type === "ADMIN" ? false : true}
            />
            <label htmlFor="admin">Admin</label>
          </RadioContainer>
        </Group>
        {formEdit ? null : (
          <SubmitBtn onClick={() => setFormEdit(true)}>Edit</SubmitBtn>
        )}
        {formEdit ? (
          <SubmitBtn type="submit">{formEdit ? "Save" : "Edit"}</SubmitBtn>
        ) : null}
      </LoginForm>
    </>
  );
};

export default NewUserForm;
