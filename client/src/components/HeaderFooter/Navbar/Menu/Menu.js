import React from "react";
import Styled from "styled-components";
import { Menu } from "styled-icons/material/Menu";

const MenuStyles = Styled.main`
cursor:pointer;
padding: 10px;
margin-right: 16px;
`;

function MenuComponent({ ToggleNav, setToggleNav }) {
  return (
    <MenuStyles>
      <MenuIcon onClick={() => setToggleNav(!ToggleNav)} />{" "}
    </MenuStyles>
  );
}

export const MenuIcon = Styled(Menu)`
width:24px;
height:24px;
color: #606060;
`;

export default MenuComponent;
