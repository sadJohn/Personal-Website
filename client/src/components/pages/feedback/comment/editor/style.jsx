import styled from "styled-components";


export const StyledEditor = styled.div`
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  display: none;
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
  
  width: 90%;
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
export const Group = styled.button`
  position: absolute;
  top: 50px;
  right: 0;
  background: transparent;
  border: none;
`;
export const CancelBtn = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  outline:none;
  cursor: pointer;
  color: black;
  background: transparent;
`;
export const Button = styled(CancelBtn)`
  width: 80px;
  height: 50px;
  border: none;
  outline:none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  background-color: #4fc08d;
  text-shadow: 0px 0px 3px rgba(0,0,0,0.7);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;