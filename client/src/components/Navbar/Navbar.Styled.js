import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  width: 100vw;
  height: 120px;
  background-color: var(--bw-Grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 960px) {
    height: 80px;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  justify-content: center;
  background-color: var(--bw-Red);
  padding: 0 20px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 80px;
    right: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const SignBtn = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px var(--bw-Black);

  & :hover {
    box-shadow: 0px 0px 2px var(--bw-Gold);
  }
`;
