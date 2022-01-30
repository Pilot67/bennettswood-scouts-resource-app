import React, {useState, useRef} from "react";
import { ModalContainer, ModalWrapper } from "./LoginModal.Styled";



const LoginModal = (props) => {
const [modalOpen, setModalOpen]= useState(false)
const modalRef = useRef()
    
const modalCloseClick= (e) => {
e.stopPropagation();
console.log("modal close clicked")
console.log(e.target, e.currentTarget, e)
}


  return (
  <ModalContainer ref={modalRef} onClick={modalCloseClick}>
      <ModalWrapper>

    <button >Some random button</button>
      </ModalWrapper>
  </ModalContainer>
  )
};

export default LoginModal;
