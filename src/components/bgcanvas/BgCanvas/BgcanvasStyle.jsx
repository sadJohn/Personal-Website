import styled from "styled-components";

export const StyledBgCanvas = styled.canvas`
  width: ${window.innerWidth}px;
  height: 400vh;
  background: linear-gradient(rgb(50, 54, 57) 0%, rgb(50, 54, 57) 25%, #FFD747 25%, #FFD747 50%, rgb(50, 54, 57) 50%, rgb(50, 54, 57) 75%, #FFD747 75% );
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100
`;
