import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 100px;

  & div.paticlesWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Summary = styled.article`
  width: 800px;
  margin: 0 auto;
  padding: 50px 30px 50px 15px;
  color: black;
  font-size: 0.8rem;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.7);

  @media screen and (max-width:800px) {
    width: 100%;
  }
  

  & p {
    margin-top: 1rem;
  }
  & a {
    color: #0583F2
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
    user-select: none;
  }

  :hover img {
    opacity: 1;
    width: 40px;
    height: 40px;
    top: -40px;
    left: -12px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26),
      0 2px 10px 0 rgba(0, 0, 0, 0.22);
  }

  & i {
    color: #0583F2;
  }

  :active i {
    color: #e91e63;
  }
`;

export const Count = styled.div`
  position: absolute;
  left: 25px;
`;
