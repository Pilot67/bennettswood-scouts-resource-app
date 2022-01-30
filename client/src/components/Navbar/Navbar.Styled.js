import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 120px;
  background-color: var(--bw-Grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 2;
  @media screen and (max-width: 960px) {
    height: 80px;
    padding: 0 5px;
  }
`;

export const Lines = styled.div`
width: 100%;
  position: absolute;
  top: 104px;
  margin-left: 192px;
  
  @media screen and (max-width: 960px) {
    top: 70px;
    margin-left: 90px;
  }

`
export const BlueLine = styled.div`
  width: 100%;
  height: 3px;
  background: var(--bw-Blue);
  @media screen and (max-width: 960px) {
    height: 2px;
  }

`;
export const RedLine = styled.div`
  margin-top: 3px;
  width: 100%;
  height: 3px;
  background: var(--bw-Red);
  @media screen and (max-width: 960px) {
    margin-top: 2px;
    height: 2px;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 50%;
    top: 80px;
    border-radius: 0 0 0 6px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    padding: 30px 20px 20px 20px;
    background-color: var(--bw-Grey);
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const SignBtn = styled.button`
  font-size: 1.75rem;
  padding: 3px 12px;
  border-radius: 1em;
  border: none;
  box-shadow: 0px 2px 7px var(--bw-Black);
  cursor: pointer;
  transition: all 200ms ease;
  background-color: var(--bw-Blue);
  color: white;
  :hover {
    box-shadow: 0px 0px 2px var(--bw-Black);
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SectionLink = styled(Link)`
  font-size: 1.75rem;
  padding: 3px 14px;
  border-radius: 1em;
  border: none;
  box-shadow: 0px 2px 7px var(--bw-Black);
  background-color: var(${({ background }) => background});
  color: ${({ color }) => color};
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  :hover {
    box-shadow: 0px 0px 2px var(--bw-Black);
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const SignMobileBtn = styled.button`
  display: none;
  font-size: 1.5rem;
  padding: 3px 20px;
  border-radius: 1em;
  border: none;
  box-shadow: 0px 2px 7px var(--bw-Black);
  background-color: var(${(props) => props.background});
  color: ${(props) => props.color};
  transition: all 200ms ease;
  :hover {
    box-shadow: 0px 0px 2px var(--bw-Black);
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const LogoBox = styled(Link)`
  --width: 192px;
  align-self: flex-start;
  width: calc(var(--width));
  height: calc(var(--width));
  padding: 5px;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    --width: 100px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 2.5rem;
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
  }
`;

