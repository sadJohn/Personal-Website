import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  background-color: #0B0C0D;
  color: #c0c0c0;
`;
export const Q = styled.q`
  font-family: "Pacifico", cursive;
  font-size: 30px;
`;
export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  display: block;
  margin: 0 20px;
  & i {
    font-size: 20px;
    color: #c0c0c0;
  }
`;

export const A = styled.a`
  display: block;
  transition: all 0.2s;
  :hover i {
    transform: scale(1.3);
    color: white;
  }
`;
