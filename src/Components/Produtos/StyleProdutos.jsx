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

export const ContainerProdutos = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  animation: ${(props) => (props.anime ? toLeft : null)} 0.3s forwards;
  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgProdutos = styled.img`
  max-width: 100%;
  border-radius: 15px;
`;

export const NomeProduto = styled.h3``;
