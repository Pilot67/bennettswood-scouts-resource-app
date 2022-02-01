import React from "react";
import styled from "styled-components";
import PageContent from "../components/PageContent";
import img from "../images/cubs-1980.jpg";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 40%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-clip: border-box;
  overflow: auto;
`;
const Cubs = () => {
  console.log("img", img);
  return (
    <Background>
      <PageContent title={"Cubs"} />
    </Background>
  );
};

export default Cubs;
