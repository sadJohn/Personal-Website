import styled from "styled-components";
import { Link as a } from "react-router-dom";
import { StyledPhoto } from "../pages/home/introduction/Profile/style";

export const Fixed = styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  font-size: 0.5rem;
`;

export const PhotoWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 100px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const Photo = styled(StyledPhoto)`
  width: 50px;
  height: 50px;
  background-size: 50px;
  cursor: pointer;
`;

export const StyledNav = styled.nav`
  width: 40%;
  height: 100%;
  margin-left: auto;
  background-color: rgba(255, 255, 255, 0);
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  justify-content: space-around;
`;

export const Li = styled.li`
  list-style: none;
  font-weight: bold;
`;

export const Link = styled(a)`
  width: 60px;
  height: 60px;

  text-align: center;
  line-height: 60px;
  color: #ffffff;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
  text-decoration: none;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 800px) {
    transform: scale(0.8);
  }

  &.Home {
    background-color: #fc6170;
  }
  &.Feedback {
    background-color: #ff8a47;
  }
`;

export const Div = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 800px) {
    transform: scale(0.8);
  }

  &.Login {
    background-color: #dcdcdd;
    margin-right: 0.5rem;
  }
  &.Signup {
    background-color: #7be19a;
  }
`;

export const User = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  color: #424140;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
`;
