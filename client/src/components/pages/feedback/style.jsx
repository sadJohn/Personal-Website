import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #dcf2de;
  padding-top: 100px;
`;

export const Summary = styled.article`
  width: 800px;
  margin: 0 auto;
  padding: 50px 30px 50px 15px;
  font-size: 1.6rem;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  & p {
    margin-top: 2rem;
  }
`;

export const Like = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  & img {
    display: block;
    opacity: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 3px;
    transition: all 0.2s cubic-bezier(0.63, 0.04, 0.59, 1.67);
  }

  :hover img {
    opacity: 1;
    width: 40px;
    height: 40px;
    top: -40px;
    left: -12px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
  }
`;
