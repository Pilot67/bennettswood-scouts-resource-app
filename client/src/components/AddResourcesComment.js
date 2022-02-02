import React, { useState, useRef } from "react";
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

const AddResourcesComment = ({ id, showModal, setShowModal }) => {
  const modalRef = useRef();
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrMessage] = useState("");

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModal((prev) => !prev);
    }
  };
  const handleCloseModal = () => setShowModal((prev) => !prev);

  const errMessage = () => {};
  const handleCommentSubmit = () => {};

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
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default AddResourcesComment;
