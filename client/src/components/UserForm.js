import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const UserForm = ({ showModal, setShowModal, userData }) => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [formEdit, setFormEdit] = useState(false);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "LEADER",
  });

  const handleInputChange = (event) => {
    setFormEdit(true);
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    setErrMessage("");
  };

  useEffect(() => {
    setUserFormData({
      ...userFormData,
      firstName: userData.data.first_name,
      lastName: userData.data.last_name,
      email: userData.data.email,
      userType: userData.data.user_type,
    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    navigate("/");
  };

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
              disabled={userData.data.user_type === "ADMIN" ? false : true}
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

export default UserForm;
