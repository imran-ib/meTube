import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Styled from "styled-components";
import { USERS } from "../../Account/AccountResolvers";
import { useQuery } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import Spinner from "../../Utills/Spinner";

const NavbarComponent = props => {
  const { data, loading, error } = useQuery(USERS);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Imran Irshad</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">LinkOne</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Login</DropdownItem>
                <DropdownItem>Register</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>My Account</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>User Email</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
