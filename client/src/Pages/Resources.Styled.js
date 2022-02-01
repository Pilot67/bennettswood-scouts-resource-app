import styled from "styled-components";
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
  height: 100%;
  color: #fff;
  text-decoration: none;
  overflow: auto;
  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  color: #fff;
  /* border-top: 1px solid var(--bw-Grey); */
  overflow: auto;
`;
export const ResourceCard = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 0 5px 2px var(--bw-Grey);
`;

export const ResourceTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResourceTitle = styled.h3`
  font-size: 1.75rem;
  padding: 0.5rem;
  color: #ffffff;
`;
export const ResourceTitleInfo = styled.h3`
  font-size: 1.25rem;
  padding: 0 0.5rem 0.5rem;
  color: #ffffff;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  color: #ffffff;
  padding: 0.5rem;
  box-shadow: 0 0 2px 1px var(--bw-Grey);
`;

export const DescriptionContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  overflow: none;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 4px;
`;
