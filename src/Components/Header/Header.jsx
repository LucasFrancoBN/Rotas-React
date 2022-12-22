import React from "react";
import { HeaderWrapper, NavbarContainer, NavbarLink } from "./StyleHeader";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavbarContainer>
        <NavbarLink to="/Rotas-React/" end="true">
          Produto
        </NavbarLink>
        <NavbarLink to="/Rotas-React/contato">Contato</NavbarLink>
      </NavbarContainer>
    </HeaderWrapper>
  );
};

export default Header;
