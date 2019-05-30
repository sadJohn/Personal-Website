import styled from "styled-components";
import { Wrapper } from "../../common/wrapper/style";

export const Container = styled(Wrapper)`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 15em;
`;

export const Title = styled.div`
  position: absolute;
  top: 5rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  background-color: white;
  font-size: 3.5rem;
`;
