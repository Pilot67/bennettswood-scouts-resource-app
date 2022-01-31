import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import menuLogo from "../../images/bennettswood-192x192.png";
import LoginModal from "../LoginModal";
import Auth from "../../utils/auth";
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
  const [showModal, setShowModal] = useState(false);
  const handleHamburgerClick = () => setClick(!click);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleMenuItemClick = () => setClick(false);

  const handleSignOut = () => {
    Auth.logout();
  };

  // const handleLoginClick = () => {
  //   setLogin(!login);
  // };

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
        {Auth.loggedIn() ? (
          <>
            <SectionLink to="/Joeys" color={"white"} background={"--bw-Blue"}>
              Leader Resources
            </SectionLink>
            <SectionLink to="/Cubs" color={"white"} background={"--bw-Blue"}>
              User Account
            </SectionLink>
          </>
        ) : (
          <>
            <SectionLink to="/Joeys" color={"white"} background={"--joeys"}>
              Joeys
            </SectionLink>
            <SectionLink to="/Cubs" color={"black"} background={"--cubs"}>
              Cubs
            </SectionLink>
            <SectionLink to="/Scouts" color={"black"} background={"--scouts"}>
              Scouts
            </SectionLink>
            <SectionLink
              to="/Venturers"
              color={"white"}
              background={"--venturers"}
            >
              Venturers
            </SectionLink>
          </>
        )}

        {Auth.loggedIn() ? (
          <SignMobileBtn
            onClick={handleSignOut}
            color={"white"}
            background={"--bw-Blue"}
          >
            Sign Out
          </SignMobileBtn>
        ) : (
          <SignMobileBtn
            onClick={openModal}
            color={"white"}
            background={"--bw-Blue"}
          >
            Login / Signup
          </SignMobileBtn>
        )}
      </NavMenu>
      {Auth.loggedIn() ? (
        <SignBtn onClick={handleSignOut}>Sign Out</SignBtn>
      ) : (
        <SignBtn onClick={openModal}>Login / Signup</SignBtn>
      )}
      <HamburgerMenu onClick={handleHamburgerClick}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>

      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </Nav>
  );
};

export default Navbar;
