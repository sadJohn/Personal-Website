import styled from "styled-components";
import { Wrapper } from "../../../common/wrapper/style";

export const Container = styled(Wrapper)`
  background: linear-gradient(
    to right,
    rgba(184, 208, 217, 0.2) 0%,
    rgba(184, 208, 217, 0.2) 33.3%,
    rgba(104, 142, 166, 0.2) 33.3%,
    rgba(104, 142, 166, 0.2) 66.6%,
    rgba(46, 73, 89, 0.2) 66.6%,
    rgba(46, 73, 89, 0.2) 100%
  );
`;

export const Category = styled.div`
  width: 100%;
  height: 10vh;
  display: absolute;
`;

export const Title = styled.div`
  display: inline-block;
  width: 33.3%;
  height: 100%;
  text-align: center;
  line-height: 10vh;
  font-size: 3rem;
  color: #00aaff;
  font-family: "Luckiest Guy", cursive;
`;
