import styled from "styled-components";
import { Wrapper } from "../../../common/wrapper/style";

export const StyledWelcome = styled(Wrapper)`
  /* font-family: "Indie Flower", cursive; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  /* font-family: "Indie Flower", cursive; */
  font-family: 'Permanent Marker', cursive;
  font-size: 9em;
  color: #FAF5F2;
  margin: 50px;
  text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3); 
`;
export const SubTitle = styled(Title)`
  font-family: 'Permanent Marker', cursive;
  font-size: 4em;
`;
