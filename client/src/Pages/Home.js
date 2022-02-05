import React from 'react';
import styled from "styled-components"
import PageContent from "../components/PageContent";
import img from "../images/group-1980.jpg";
import content from "../PageContentText/Home.json"


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
const Home =() => {

    return (
        <Background>
        <PageContent content={content} />
      </Background>
    )
}



export default Home;