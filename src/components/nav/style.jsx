import styled from "styled-components";
import { Link as a } from "react-router-dom"


export const Fixed = styled.div`
  height: 10vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const StyledNav = styled.nav`
  height: 100%;
  width: 100%;
  background-color: rgba(100, 100, 100, .8);
`;

export const Ul = styled.ul`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-around;
`;

export const Li = styled.li`
  list-style: none;
`;

export const Link = styled(a)`
  text-decoration: none;
  color: white;
`;
