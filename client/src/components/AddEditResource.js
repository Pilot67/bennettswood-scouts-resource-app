import React, { useState, useRef } from "react";
import { ADD_COMMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import {
  ModalContainer,
  ModalWrapper,
  CloseModalButton,
} from "./LoginModal.Styled";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  TextField,
  ErrorMessage,
  Group,
  RadioButton,
  RadioContainer,
} from "./Login.Styled";

const AddEditResource = ({
  id,
  showModalResource,
  setShowModalResource,
  setRefetchData,
}) => {
  const modalRef = useRef();

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModalResource((prev) => !prev);
    }
  };
  const handleCloseModal = () => setShowModalResource((prev) => !prev);
  const [errMessage, setErrMessage] = useState("");
  const [userFormData, setUserFormData] = useState({
    title: "",
    description: "",
    link: "",
    image: "",
    section: "",
    userType: "LEADER"
  });

  const handleCommentSubmit = async (event) => {
      event.preventDefault();
      
      console.log(userFormData)
      clearForm()
      handleCloseModal()

  };


  const handleInputChange = (event) => {
    setErrMessage("");
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  const clearForm = () => {
    setUserFormData({
    title: "",
    description: "",
    link: "",
    image: "",
    section: "",
    userType: "LEADER"})
  }
  return (
    <>
      {showModalResource ? (
        <ModalContainer ref={modalRef} onClick={modalCloseBackground}>
          <ModalWrapper>
            <CloseModalButton onClick={handleCloseModal} />
            {id > 0 ? (
              <Title>Edit Resource</Title>
            ) : (
              <Title>New Resource</Title>
            )}
            <ErrorMessage>{errMessage}</ErrorMessage>
            <LoginForm onSubmit={handleCommentSubmit}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <InputField
                name="title"
                onChange={handleInputChange}
                type="text"
                placeholder="Title"
                value={userFormData.title}
              ></InputField>
              <InputLabel htmlFor="description">Description</InputLabel>
              <TextField
                name="description"
                onChange={handleInputChange}
                type="textarea"
                maxLength="1000"
                rows="4"
                placeholder="Description"
                value={userFormData.description}
              ></TextField>
              <InputLabel htmlFor="link">Link</InputLabel>
              <InputField
                name="link"
                onChange={handleInputChange}
                type="text"
                placeholder="html Link"
                value={userFormData.link}
              ></InputField>
              <InputLabel htmlFor="image">Image Link</InputLabel>
              <InputField
                name="image"
                onChange={handleInputChange}
                type="text"
                placeholder="html Image"
                value={userFormData.image}
              ></InputField>
              <Group>
                <RadioContainer>
                  <RadioButton
                    value="MEMBER"
                    id="member"
                    name="userType"
                    type="radio"
                    onChange={ handleInputChange}
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
                    onChange={ handleInputChange}
                  />
                  <label htmlFor="leader">Leader</label>
                </RadioContainer>
              </Group>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </LoginForm>
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};
export default AddEditResource;
