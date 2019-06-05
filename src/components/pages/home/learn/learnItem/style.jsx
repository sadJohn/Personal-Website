import styled from "styled-components";
import { Link, Img } from "../../../../common/imglink/style";

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
export const MenuItem = styled.div`
  width: 100%;
  height: 50%;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  border-radius: 2em;
  background-color: #e91e63;
  color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
  transition: all 0.4s;

  :hover {
    background: darken(#e91e63, 5%);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28),
      0 4px 15px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Menu = styled.div`
  visibility: hidden;
  width: 80px;
  height: 80px;
  /* transform: translateX(80px); */
  transform: ${props =>
    props.phase === 2 ? "translateX(-80px)" : "translateX(80px)"};
`;
