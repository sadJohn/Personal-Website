import styled from "styled-components";

export const Link = styled.a`
  display: block;
  width: 100%;
  /* height: 20rem; */
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  :hover img {  
    transform: scale(1.5)
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 225ms cubic-bezier(0.22, 0.61, 0.36, 1);
`;
