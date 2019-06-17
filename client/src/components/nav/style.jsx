import styled from "styled-components";
import { Link as a } from "react-router-dom";
import { StyledPhoto } from "../pages/home/introduction/Profile/style";
import home from "../../assets/images/home.png";
import discuss from "../../assets/images/discuss.png";
import login from "../../assets/images/login.png";
import signup from "../../assets/images/signup.png";

export const Fixed = styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
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
  width: 3rem;
  height: 3rem;
  display: inline-block;
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  &.Home {
    background: url(${home}) no-repeat;
    background-size: 100% 100%;
  }
  &.Feedback {
    background: url(${discuss}) no-repeat;
    background-size: 100% 100%;
  }
`;

export const Div = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  &.Login {
    background: url(${login}) no-repeat;
    background-size: 100% 100%;
    margin-right: 0.5rem;
  }
  &.Signup {
    background: url(${signup}) no-repeat;
    background-size: 100% 100%;
  }
`;

export const User = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  color: #424140;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
`;
