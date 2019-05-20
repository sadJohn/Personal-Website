import styled from "styled-components";
import photo from "../../../assets/images/profile.jpg";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50vh;
`;

export const StyledPhoto = styled.div`
  width: 10em;
  height: 10em;
  background: url(${photo}) no-repeat;
  background-size: 10em;
  border-radius: 5em;
  
`;

export const StyledName = styled.div`
  width: 10em;
  height: 5em;
  font-size: 2em;
  text-align: center;
  line-height: 5em;
`;
