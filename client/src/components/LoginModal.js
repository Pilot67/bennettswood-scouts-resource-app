import React, {useState} from "react";
import { ModalContainer } from "./LoginModal.Styled";



const LoginModal = (props) => {
    console.log(props)
const [modalOpen, setModalOpen]= useState(false)
    
const modalCloseClick= (event)=> {
    event.preventDefault()
console.log("modal close clicked")
console.log(event.target)
props.handleModalClose()
}


  return (
  <ModalContainer onClick={modalCloseClick}>
    <h1 >Hello</h1>
    <button >Some random button</button>
  </ModalContainer>
  )
};

export default LoginModal;
