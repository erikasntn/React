import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0047ba;
  padding: 10px 20px;
  color: white;
  font-weight: bold;

`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Meu logotipo</h1>
      <NavBar></NavBar>
    </HeaderContainer>
  );
}

export default Header;
