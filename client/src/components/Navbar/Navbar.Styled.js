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
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  justify-content: center;
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
  transition: all 200ms ease;
  :hover {
    box-shadow: 0px 0px 2px var(--bw-Black);
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const SectionBtn = styled.button`
  font-size: 2rem;
  padding: 3px 20px;
  border-radius: 1em;
  border: none;
  box-shadow: 0px 2px 7px var(--bw-Black);
  background-color: var(${(props) => props.background});
  color: ${(props) => props.color};
  transition: all 200ms ease;
  :hover {
    box-shadow:0px 0px 2px var(--bw-Black);
  }
`;
export const logoBox = styled.div`
  width: 192px;
  height: 192px;
  padding: 5px;
  z-index: 1;
`;

export const logo = styled.img `
  width: 100%;
  height: 100%;
`;