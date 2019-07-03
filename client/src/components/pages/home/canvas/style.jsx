import styled from "styled-components";

export const StyledBgCanvas = styled.canvas`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight * 4}px;
  background: linear-gradient(
    #b8d0d9 0%,
    #b8d0d9 25%,
    #688ea6 25%,
    #688ea6 50%,
    #2e4959 50%,
    #2e4959 75%,
    #131d26 75%
  );
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100;
`;
