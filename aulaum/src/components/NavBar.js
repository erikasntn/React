import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
`;

const Menu = styled.p`
  justify-content: space-around;
  margin: 0 1em;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Menu>Item 1</Menu>
      <Menu>Item 2</Menu>
      <Menu>Item 3</Menu>
    </NavBarContainer>
  );
}

export default NavBar;
