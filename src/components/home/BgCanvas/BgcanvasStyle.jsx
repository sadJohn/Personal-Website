import styled from "styled-components";

export const StyledBgCanvas = styled.canvas`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight * 2}px;
  background: linear-gradient(rgb(50, 54, 57) 50%, rgb(50, 54, 57), #FFD747 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100
`;
