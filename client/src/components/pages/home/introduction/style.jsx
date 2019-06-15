import styled from "styled-components";
import { Wrapper } from "../../../common/wrapper/style";

export const StyledIntro = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 9rem;
  height: 9rem;
  top: 0;
  right: 50px;
  z-index: 1000;
`;
