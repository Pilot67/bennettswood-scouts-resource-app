import React from "react";
import { Nav, NavMenu , SignBtn} from "./Navbar.Styled";

const Navbar = () => {
  return (
    <Nav>
      <h1>Nav Logo</h1>
      <NavMenu>
        <h1>Joeys</h1>
        <h1>Joeys</h1>
        <h1>Joeys</h1>
        <h1>Joeys</h1>
      </NavMenu>{" "}
      <SignBtn>
        Login / Sign up
      </SignBtn>
    </Nav>
  );
};

export default Navbar;
