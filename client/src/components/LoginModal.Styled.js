import styled from "styled-components";

export const ModalContainer = styled.section`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
z-index: 98;
`

export const ModalWrapper = styled.div `
position: relative;
min-width: 50vw;
min-height: 50vh;
background-color: white;
color: black;
box-shadow: 0 0 20px 1px black;
padding: 1rem;
`