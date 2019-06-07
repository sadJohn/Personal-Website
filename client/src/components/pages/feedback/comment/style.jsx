import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
`;

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
`;

export const Editor = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Photo = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
`;

export const Img = styled.img`
  display: block;
  border-radius: 50%;
`;

export const Input = styled.input`
  display: inline-block;
  width: 650px;
  height: 50px;
  vertical-align: bottom;
  border: 1px solid #ccc;
  margin-left: 70px;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  width: 80px;
  height: 50px;
  float: right;
`;

export const CommentsUl = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li`
  width: 100%;
  min-height: 50px;
  margin-bottom: 1.5em;
  font-size: 1.5em;
`;

export const Username = styled.div`
  margin-left: 70px;
  margin-bottom: 1em;
`;

export const Message = styled.div`
  margin-left: 70px;
`;

export const Options = styled.div`
  margin-left: 70px;
`;

export const Vote = styled.div`
  display: inline-block;
  margin: 5px 10px;
  cursor: pointer;
`;

export const Reply = styled.div`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
`;


