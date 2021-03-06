import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
export const Item = styled.div`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  width: 15rem;
  display: block;
  font-size: inherit;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
export const Button = styled.button`
  font-size: 1rem;
  width: 15rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #009a61;
  cursor: pointer;
  color: white;

  :hover {
    background-color: #017e66;
  }
`;

export const Invalid = styled.div`
  font-size: 0.75rem;
  color: red;
  width: 15rem;
  height: 1.5rem;
  line-height: 1.5rem;
`;
