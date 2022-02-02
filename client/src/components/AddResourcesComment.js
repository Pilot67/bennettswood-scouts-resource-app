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
  SignupIn,
  ErrorMessage,
} from "./Login.Styled";

const AddResourcesComment = ({ id, showModal, setShowModal , setRefetchData}) => {
  const modalRef = useRef();
  const [userFormData, setUserFormData] = useState({
    title: "",
    description: "",
  });
  const [errorMessage, setErrMessage] = useState("");
  const [addResourceComment, { error, data }] = useMutation(ADD_COMMENT);



  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModal((prev) => !prev);
    }
  };
  const handleCloseModal = () => setShowModal((prev) => !prev);

  const errMessage = () => {};

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    try {
      const { data } = await addResourceComment({
        variables: {resources_id:id, ...userFormData},
      });
    } catch (error) {
      console.error(error);
      // clearForm();
    }
    setRefetchData(true)
    setShowModal((prev) => !prev)

  };

  const handleInputChange = (event) => {
    setErrMessage("");
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <>
      {showModal ? (
        <ModalContainer ref={modalRef} onClick={modalCloseBackground}>
          <ModalWrapper>
            <CloseModalButton onClick={handleCloseModal} />
            <Title>Add a Comment</Title>
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
              <InputLabel htmlFor="description">Password</InputLabel>
              <InputField
                name="description"
                onChange={handleInputChange}
                type="text"
                placeholder="Description"
                value={userFormData.description}
              ></InputField>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </LoginForm>
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default AddResourcesComment;
