import React, { useState, useRef, useEffect } from "react";
import { ADD_RESOURCE, EDIT_RESOURCE } from "../utils/mutations";
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
  RadioContainer,
  Select,
} from "./Login.Styled";

const AddEditResource = ({
  showModalResource,
  setShowModalResource,
  setRefetchData,
  resourceData,
}) => {
  // let id = 1;
  //  console.log(resourceData.title)
  const modalRef = useRef();
  const [addResource, { error, data }] = useMutation(ADD_RESOURCE);
  const [editResource, { editError, editData }] = useMutation(EDIT_RESOURCE);

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModalResource((prev) => !prev);
    }
  };
  const handleCloseModal = () => setShowModalResource((prev) => !prev);
  const [errMessage, setErrMessage] = useState("");
  const [userFormData, setUserFormData] = useState({
    id: 0,
    title: "",
    description: "",
    link: "",
    image: "",
    section: "GENERAL",
  });

  useEffect(() => {
    if (!resourceData) {
      return;
    }
    setUserFormData({
      id: resourceData.id,
      title: resourceData.title,
      description: resourceData.description,
      link: resourceData.link,
      image: resourceData.image,
      section: resourceData.section,
    });
  }, [resourceData]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!userFormData.title) {
      setErrMessage("Title is required");
      return;
    }

    if (userFormData.id === 0) {
      try {
        const { data } = await addResource({
          variables: { ...userFormData },
        });
      } catch (error) {
        console.error(error);
        clearForm();
      }
    } else {
      try {
        const { data } = await editResource({
          variables: { ...userFormData },
        });

        if (data?.editResource.message === "Success") {
          alert("Success");
        }
      } catch (error) {
        console.error(error);
        alert("Oops... something went wrong");
        return;
      }
    }
    setRefetchData(true);
    clearForm();
    handleCloseModal();
  };

  //setUserFormData({...userFormData, title:"Title Set by Me"})

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
    });
  };
  return (
    <>
      {showModalResource ? (
        <ModalContainer ref={modalRef} onClick={modalCloseBackground}>
          <ModalWrapper>
            <CloseModalButton onClick={handleCloseModal} />
            {userFormData.id > 0 ? (
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
                  <InputLabel htmlFor="section"> Choose a section: </InputLabel>
                  <Select
                    id="section"
                    name="section"
                    onChange={handleInputChange}
                  >
                    <option value="GENERAL">General</option>
                    <option value="JOEYS">Joeys</option>
                    <option value="CUBS">Cubs</option>
                    <option value="SCOUTS">Scouts</option>
                    <option value="VENTURERS">Venturers</option>
                  </Select>
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
