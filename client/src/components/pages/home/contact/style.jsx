import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: ${window.innerHeight * 0.6}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  background-color: #0b0c0d;
  color: #c0c0c0;
`;
export const Q = styled.q`
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
`;
export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  display: block;
  margin: 0 20px;
  & i {
    font-size: 1rem;
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

export const CopyRight = styled.div`
  font-size: 10px;
  
  @media screen and (max-width: 800px) {
    transform: scale(0.5);
  }
`;
