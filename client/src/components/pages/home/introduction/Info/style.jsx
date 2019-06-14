import styled from "styled-components";

export const StyledInfo = styled.div`
  width: 35%;
  height: 70%;
  padding-left: 0.5rem;
  position: relative;
  overflow: auto;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
    border-radius: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: #ffff12;
  font-family: "Indie Flower", cursive;
  margin-top: 10px;
  text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.7);
`;

export const P = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #f7ffeb;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
  font-family: "Open Sans", sans-serif;

  & ul {
    list-style: disc;
  }
`;
