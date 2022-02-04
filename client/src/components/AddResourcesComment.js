import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ADD_COMMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/Auth";

import {
  ModalContainer,
  ModalWrapper,
  CloseModalButton,
} from "./Modal.Styled";
import {
  InputField,
  InputLabel,
  LoginForm,
  Title,
  SubmitBtn,
  TextField,
  ErrorMessage,
} from "./Login.Styled";

const AddResourcesComment = ({
  id,
  showModal,
  setShowModal,
  setRefetchData,
}) => {
  const modalRef = useRef();
  const [userFormData, setUserFormData] = useState({
    title: "",
    description: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [addResourceComment, { error, data }] = useMutation(ADD_COMMENT);

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModal((prev) => !prev);
    }
  };
  const handleCloseModal = () => setShowModal((prev) => !prev);

  //const errMessage = () => {};

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (Auth.loggedIn) {
      try {
        const { data } = await addResourceComment({
          variables: { resources_id: id, ...userFormData },
        });
        toast.success('Added Comment Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover:false,
          draggable: true,
          progress: undefined,
          });
      } catch (error) {
        console.error(error);
        clearForm();
      }
      setRefetchData(true);
      setShowModal((prev) => !prev);
      return;
    }
    alert("you need to be logged in");
    setShowModal((prev) => !prev);
  };

  const clearForm = () => {
    setUserFormData({
      title: "",
      description: "",
    });
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
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </LoginForm>
          </ModalWrapper>
        </ModalContainer>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default AddResourcesComment;
