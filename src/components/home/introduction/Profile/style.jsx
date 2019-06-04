import styled from "styled-components";
import photo from "../../../../assets/images/profile.jpg";

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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const StyledName = styled.div`
  width: 10em;
  height: 5em;
  font-size: 2em;
  text-align: center;
  line-height: 5em;
`;
