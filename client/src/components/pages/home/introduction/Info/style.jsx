import styled from "styled-components";


export const StyledInfo = styled.div`
  width: 35%;
  height: 70vh;
  padding-left: 1em;
  position: relative;
`;

export const Title = styled.div`
  font-size: 3rem;
  color: #FFFF12;
  font-family: "Indie Flower", cursive;
  margin-top: 10px;
  text-shadow: 0px 0px 3px rgba(255,255,255,0.7); 
`;

export const P = styled.div`
  font-size: 1.8rem;
  line-height: 1.4;
  color: #F7FFEB;
  text-shadow: 0px 0px 3px rgba(0,0,0,0.7); 
  font-family: 'Open Sans', sans-serif;

  & ul {
    list-style: disc;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  top: -120px;
  right: -50px;
`;
