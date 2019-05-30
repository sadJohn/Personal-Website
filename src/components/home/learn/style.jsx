import styled from "styled-components";
import { Link, Img } from "../../common/imglink/style";
import { Wrapper } from "../../common/wrapper/style";

export const Container = styled(Wrapper)`

`;

export const LearnLink = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
`;

export const LearnImg = Img;
