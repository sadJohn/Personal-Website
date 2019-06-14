import styled from "styled-components";
import photo from "../../../../../assets/images/profile.jpg";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
    height: 50%;
  }
`;

export const StyledPhoto = styled.div`
  width: 25%;
  background: url(${photo}) no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  &:before {
    content: "";
    display: inline-block;
    width: 0.1px;
    padding-top: 100%;
  }
`;

export const Name = styled.div`
  width: 5rem;
  height: 4rem;
  font-size: 1.75rem;
  text-align: center;
  line-height: 4rem;
  color: #F7FFEB;
  text-shadow: 0px 0px 6px rgba(0,0,0,0.7); 
  font-family: "Indie Flower", cursive;
`;
