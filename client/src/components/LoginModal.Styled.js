import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 98;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 60vw;
  background-color: var(--bw-Grey);
  color: black;
  box-shadow: 0 0 20px 1px black;
  padding: 1rem;
  border-radius: 4px;
  @media screen and (max-width:768px){
    min-width: 95vw;

    
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  color: black;
  z-index: 100;
`;
