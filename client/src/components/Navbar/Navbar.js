import React from "react";
import menuLogo from "./images/bennettswood-192x192.png";
import {
  Nav,
  NavMenu,
  SignBtn,
  SectionBtn,
  logoBox,
  logo,
} from "./Navbar.Styled";

const Navbar = () => {
  return (
    <Nav>
      <logoBox>
        <logo src={menuLogo} alt="Logo"/>
      </logoBox>
      <NavMenu>
        <SectionBtn color={"white"} background={"--joeys"}>
          Joeys
        </SectionBtn>
        <SectionBtn color={"black"} background={"--cubs"}>
          Cubs
        </SectionBtn>
        <SectionBtn color={"black"} background={"--scouts"}>
          Scouts
        </SectionBtn>
        <SectionBtn color={"white"} background={"--venturers"}>
          Venturers
        </SectionBtn>
      </NavMenu>{" "}
      <SignBtn>Login / Sign up</SignBtn>
    </Nav>
  );
};

export default Navbar;
