import React from "react";
//import { Background } from "./Venturers.Styled";
import PageContent from "../components/PageContent";
import styled from "styled-components";
import img from "../images/venturers-1600.jpg";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 65%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-clip: border-box;
  overflow: auto;
  @media screen and (max-width:768px) {
    background-position: 50% 40%;
  }
`;


const Venturers = () => {
  return (
    <Background>
      <PageContent title={"Venturers"}/>
    </Background>
  );
};

export default Venturers;
