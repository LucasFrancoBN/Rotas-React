import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  max-width: 992px;
  padding: 0 16px;
  margin: 0 auto 25px;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  background: #ddd;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
`;
