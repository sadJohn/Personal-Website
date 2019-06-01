import styled from "styled-components";
import { Link, Img } from "../../../common/imglink/style";

export const LearnLink = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const LearnImg = Img;

export const StyledLearn = styled.div`
  position: absolute;

  :hover div {
    visibility: visible;
  }
`;
export const MenuItem = styled.button`
  width: 100%;
  height: 50%;
  cursor: pointer;
`;

export const Menu = styled.div`
  visibility: hidden;
  width: 80px;
  height: 60px;
  transform: translateX(80px);
`;
