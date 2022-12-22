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

export const ContainerContato = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  animation: ${(props) => (props.anime ? toLeft : null)} 0.3s forwards;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ContatoImg = styled.img`
  max-width: 100%;
  border-radius: 15px;
`;

export const ContatoDesc = styled.div`
  @media (max-width: 500px) {
    order: -1;
  }
`;

export const ContatoTitulo = styled.h2``;

export const ContContato = styled.p`
  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 2px;
    margin-right: 0.5rem;
    background-color: rgba(155, 155, 155, 0.5);
  }
`;
