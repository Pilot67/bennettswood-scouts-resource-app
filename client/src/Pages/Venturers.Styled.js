import styled from "styled-components";
import img from "../images/venturers-1980.jpg";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-clip: border-box;
  overflow: auto;
`;

