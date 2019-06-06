import styled from "styled-components";
import { Wrapper } from "../../../common/wrapper/style";

export const Container = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5em 15em;
`;

export const Title = styled.div`
  top: 5rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 4rem;
  color: #ffd747;
  font-family: "Indie Flower", cursive;
`;

export const Div = styled.div`
  font-size: 2.5rem;
  color: #ffd747;
  font-family: "Indie Flower", cursive;

  & i {
    font-size: 3rem;
    margin-left: 2rem;
  }
`;
export const A = styled.a`
  display: inline-block;
  cursor: pointer;
  transition: all 0.5s;
  color: white;

  :hover {
    transform: translateY(-1rem);
  }
`;
