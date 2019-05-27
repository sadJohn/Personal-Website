import styled from "styled-components";


export const StyledFixed = styled.div`
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

export const StyledUl = styled.ul`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-around;
`;

export const StyledLi = styled.li`
  list-style: none;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;
