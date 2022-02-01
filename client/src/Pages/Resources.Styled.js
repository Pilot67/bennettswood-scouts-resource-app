import styled from "styled-components"
import img from "../images/scouts-1980.jpg";



export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-clip: border-box;
  overflow: none;
`;

export const PageContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  margin: 0px auto 0px auto;
  padding: 5rem 0;
  width: 75vw;
  height:100%;
  color: #fff;
  text-decoration: none;
  overflow: auto;
`;
export const InfoContainer = styled.div`
position: relative;
  width: 100%;
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  color: #fff;
  border-top: 1px solid var(--bw-Grey);
  overflow: auto;
`
export const ResourceCard = styled.div`
width: 100%;
/* border: 1px solid var(--bw-Grey); */
padding: 1rem;
margin: 0.5rem 0;
box-shadow: 0 0 5px 2px var(--bw-Grey);

`