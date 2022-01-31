import React, { useState, useRef } from "react";
import Login from "./Login"
import {
  ModalContainer,
  ModalWrapper,
  CloseModalButton,
} from "./LoginModal.Styled";

const LoginModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModal((prev) => !prev);
    }
  };

  return (
    <>
      {showModal ? (
        <ModalContainer ref={modalRef} onClick={modalCloseBackground}>
          <ModalWrapper>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
            <Login />
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default LoginModal;
