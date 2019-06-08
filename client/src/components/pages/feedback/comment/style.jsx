import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  margin: 10px auto;
  background-color: #f0f0f0;
  font-family: 'Open Sans', sans-serif;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
`;

export const Editor = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Photo = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const Img = styled.img`
  display: block;
  border-radius: 50%;
`;

export const Input = styled.input`
  display: inline-block;
  width: 630px;
  height: 50px;
  vertical-align: bottom;
  border: 1px solid #ccc;
  margin-left: 70px;
  padding-left:25px;
  font-size: 2.5rem;
  border-radius: 50px;
  outline:none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const Button = styled.button`
  width: 80px;
  height: 50px;
  position: absolute;
  top: 110px;
  right: 0;
  border: none;
  outline:none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  background-color: #4fc08d;
  text-shadow: 0px 0px 3px rgba(0,0,0,0.7);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const CommentsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 80px;
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


