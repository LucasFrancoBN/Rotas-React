import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(155, 155, 155, 0.75),
    rgba(155, 155, 155, 0.125)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingAnime = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  animation: ${rotate} 0.5s linear infinite;
  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    transform: rotate(60deg);
    position: absolute;
    top: 15%;
    right: -16px;
    /* border-radius: 50%; */
  }
`;
