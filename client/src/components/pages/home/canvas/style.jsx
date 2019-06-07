import styled from "styled-components";

export const StyledBgCanvas = styled.canvas`
  width: ${window.innerWidth}px;
  height: 400vh;
  background: linear-gradient(
    #B8D0D9 0%,
    #B8D0D9 25%,
    #688EA6 25%,
    #688EA6 50%,
    #2E4959 50%,
    #2E4959 75%,
    #131D26 75%
  );
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100;
`;
