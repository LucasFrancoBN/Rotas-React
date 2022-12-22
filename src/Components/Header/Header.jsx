import React from "react";
import { HeaderWrapper, NavbarContainer, NavbarLink } from "./StyleHeader";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavbarContainer>
        <NavbarLink to="/" end="true">
          Produto
        </NavbarLink>
        <NavbarLink to="/contato">Contato</NavbarLink>
      </NavbarContainer>
    </HeaderWrapper>
  );
};

export default Header;
