import styled from "styled-components";
import { Wrapper } from "../../../common/wrapper/style";

export const Container = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  

  @media screen and (max-width: 800px) {
    padding: 2.5rem 0;
  }
  @media screen and (max-width: 600px) {
    padding: 2.5rem 20%;
  }
`;

export const Title = styled.div`
  top: 2.5rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 2rem;
  color: #ffd747;
  text-shadow: 0px 0px 1px rgba(255,255,255,0.7); 
  font-family: "Indie Flower", cursive;
`;

export const Div = styled.div`
  font-size: 1.75rem;
  color: #ffd747;
  font-family: "Indie Flower", cursive;

  & i {
    font-size: 1.5rem;
    margin-left: 1rem;
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
