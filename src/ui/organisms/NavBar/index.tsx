import React from "react";
import styled from "styled-components";
import { NavIcon } from "../../atoms/NavIcon";
import StyledNavLink from "../../atoms/NavLink";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  background: #101522;
  align-items: center;
`;

function NavBar() {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>  
      <StyledNavLink to="/cart">Cart</StyledNavLink>
      <NavIcon>Shop Here</NavIcon>
    </Nav>
  );
}

export default NavBar;
