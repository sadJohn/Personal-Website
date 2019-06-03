import styled from "styled-components";

export const Link = styled.a`
  display: block;
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  :hover img {  
    transform: scale(1.5)
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 225ms cubic-bezier(0.22, 0.61, 0.36, 1);
`;
