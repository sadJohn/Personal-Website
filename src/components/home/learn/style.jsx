import styled from "styled-components";
import { Wrapper } from "../../common/wrapper/style";

export const Container = styled(Wrapper)`
  background: linear-gradient(
    to right,
    rgb(50, 54, 57) 0%,
    rgb(50, 54, 57) 33.3%,
    #ffd747 33.3%,
    #ffd747 66.6%,
    rgb(50, 54, 57) 66.6%,
    rgb(50, 54, 57) 100%
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
  font-family: 'Luckiest Guy', cursive;
`;
