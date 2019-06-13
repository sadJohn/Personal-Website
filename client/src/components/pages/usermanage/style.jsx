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
  width: 400px;
  height: 400px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
export const Item = styled.div`
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  width: 300px;
  display: block;
  font-size: inherit;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
export const Button = styled.button`
  font-size: 2em;
  width: 300px;
  height: 40px;
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
  font-size: 1.5rem;
  color: red;
  width: 300px;
  height: 30px;
  line-height: 30px;
`;
