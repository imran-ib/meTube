import React from "react";
import Styles from "styled-components";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import SearchBar from "./Searchbar/serchbar";
import RightSide from "./RightSideIcons/RightSide";

const NavbarStyles = Styles.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 57px;
background-color: #ffffff;
padding: 0 16px;
`;

const Navbar = ({ ToggleNav, setToggleNav }) => {
  return (
    <NavbarStyles>
      <Menu ToggleNav={ToggleNav} setToggleNav={setToggleNav} />
      <Logo />
      <SearchBar />
      <RightSide />
    </NavbarStyles>
  );
};

export default Navbar;
