import styled from "styled-components";
import { Container } from "../container";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 9;
  backdrop-filter: blur(6px);
  background: rgba(246, 243, 239, 0.5);
  transition: 300ms ease-out;
  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px 0 30px;
  }
  &.hidden {
    transform: translateY(-100%);
  }
  @media (max-width: 1024px) {
    ${Container} {
      padding: 37px 0 18px;
    }
  }
`;

export const Logo = styled.a`
  img {
    height: 26px;
    width: 92px;
    object-fit: contain;
    object-position: center;
  }
`;
