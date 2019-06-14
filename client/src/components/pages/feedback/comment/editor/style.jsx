import styled from "styled-components";


export const StyledEditor = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  position: relative;
  display: none;
`;

export const Photo = styled.div`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const Img = styled.img`
  width:100%;
  height:100%;
  display: block;
  border-radius: 50%;
`;

export const Input = styled.input`
  display: inline-block;
  
  width: 85%;
  height: 2.5rem;
  vertical-align: bottom;
  border: 1px solid #ccc;
  margin-left: 3.5rem;
  padding-left:1.25rem;
  font-size: 1.25rem;
  border-radius: 50px;
  outline:none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;
export const Group = styled.button`
  position: absolute;
  top: 3rem;
  right: 1rem;
  background: transparent;
  border: none;

  @media screen and (max-width: 800px) {
    transform: scale(0.5);
  }
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
  border: none;
  outline:none;
  border-radius: 2.5rem;
  cursor: pointer;
  color: white;
  background-color: #4fc08d;
  text-shadow: 0px 0px 3px rgba(0,0,0,0.7);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;