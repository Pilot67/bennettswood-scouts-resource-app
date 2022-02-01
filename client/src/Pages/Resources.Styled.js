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
    align-items: flex-start;
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
  grid-template-columns: 1fr 0.75fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  color: #ffffff;
  padding: 0.5rem;
  box-shadow: 0 0 2px 1px var(--bw-Grey);
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  font-size: 1.25rem;
`;
export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 4px;
`;

export const LinkContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: block;
  font-size: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  @media screen and (max-width: 768px) {
    grid-area: 3 / 1 / 4 / 1;
  }

  a {
    color: var(--bw-Gold);
    cursor: pointer;
  }
`;
