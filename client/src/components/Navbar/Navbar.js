import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import menuLogo from "../../images/bennettswood-192x192.png";
import LoginModal from "../LoginModal";
import {
  Nav,
  NavMenu,
  SignBtn,
  LogoBox,
  Logo,
  SignMobileBtn,
  HamburgerMenu,
  SectionLink,
  Lines,
  BlueLine,
  RedLine,
} from "./Navbar.Styled";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [login, setLogin] = useState(false);
  const handleHamburgerClick = () => setClick(!click);
  const handleMenuItemClick = () => setClick(false);

  const handleLoginClick = () => {
    setLogin(!login);
  };
  
  return (
    <Nav>
      <LogoBox to="/">
        <Logo
          src={menuLogo}
          alt="Bennettswood logo"
          onClick={handleMenuItemClick}
        ></Logo>
        <Lines>
          <BlueLine />
          <RedLine />
        </Lines>
      </LogoBox>
      <NavMenu click={click} onClick={handleMenuItemClick}>
        <SectionLink to="/Joeys" color={"white"} background={"--joeys"}>
          Joeys
        </SectionLink>
        <SectionLink to="/Cubs" color={"black"} background={"--cubs"}>
          Cubs
        </SectionLink>
        <SectionLink to="/Scouts" color={"black"} background={"--scouts"}>
          Scouts
        </SectionLink>
        <SectionLink to="/Venturers" color={"white"} background={"--venturers"}>
          Venturers
        </SectionLink>
        <SignMobileBtn color={"white"} background={"--bw-Blue"}>
          Login / Signup
        </SignMobileBtn>
      </NavMenu>
      <SignBtn onClick={handleLoginClick} >Login / Signup</SignBtn>
      {login ? <LoginModal handleModalClose={()=>setLogin(!login)}/>: null}


      <HamburgerMenu onClick={handleHamburgerClick}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
    </Nav>
  );
};

export default Navbar;
