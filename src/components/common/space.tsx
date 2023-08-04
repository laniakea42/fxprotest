import styled from "styled-components";

const Space = styled.div.withConfig({
  shouldForwardProp: (propName) => propName === "children",
})<{
  height?: number;
  heightMobile?: number;
}>(
  ({ height, heightMobile }) => `
    ${height !== undefined ? `height: ${height}px;` : ""};

    @media (max-width: 1024px) {
      height: ${heightMobile !== undefined ? heightMobile : 40}px;
    }
  `
);

export default Space;
