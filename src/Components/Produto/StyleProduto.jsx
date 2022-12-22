import styled, { keyframes } from "styled-components";

const toLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ContainerProduto = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  animation: ${(props) => (props.anime ? toLeft : null)} 0.3s forwards;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 15px;
`;

export const DescWrapper = styled.div`
  @media (max-width: 500px) {
    order: -1;
  }
`;

export const TituloProduto = styled.h2`
  font-size: 2rem;
`;

export const PrecoProduto = styled.span`
  padding: 0.5rem 1rem;
  background-color: #68fa38;
  color: #255914;
  border-radius: 5px;
`;
