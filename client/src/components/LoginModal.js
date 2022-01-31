import React, { useState, useRef } from "react";
import Login from "./Login";
import Signup from "./Signup";
import {
  ModalContainer,
  ModalWrapper,
  CloseModalButton,
} from "./LoginModal.Styled";

const LoginModal = ({ showModal, setShowModal }) => {
  const [signUp, setSignUp] = useState(false);
  const modalRef = useRef();

  const modalCloseBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowModal((prev) => !prev);
    }
  };

  const handleSignUp = () => setSignUp((prev) => !prev);
  const handleCloseModal = () => setShowModal((prev) => !prev);

  return (
    <>
      {showModal ? (
        <ModalContainer ref={modalRef} onClick={modalCloseBackground}>
          <ModalWrapper>
            <CloseModalButton onClick={handleCloseModal} />

            {signUp ? <Signup handleSignUp={handleSignUp}/> : <Login handleSignUp={handleSignUp} />}
            
          </ModalWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default LoginModal;
