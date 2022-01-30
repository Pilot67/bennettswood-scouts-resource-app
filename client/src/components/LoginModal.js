import React, { useState, useRef } from "react";
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
            <h1>Login</h1>

            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default LoginModal;
