import styled from "styled-components";
import comment from "../../../../../assets/images/comment.png";
import reply from "../../../../../assets/images/reply.png";
import cancel from "../../../../../assets/images/cancel.png";

export const StyledEditor = styled.div`
  width: 100%;
  height: 5.5rem;
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
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
`;

export const Input = styled.input`
  display: block;
  position: absolute;
  right: 0;
  width: 90%;
  height: 2.5rem;
  border: 1px solid #ccc;
  padding-left: 1.25rem;
  font-size: 1.25rem;
  border-radius: 50px;
  outline: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 400px) {
    width: 85%;
  }
`;
export const Group = styled.div`
  position: absolute;
  width: 8rem;
  height: 2.5rem;
  top: 3rem;
  right: 0;
`;
export const Button = styled.div`
  width: 4rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  cursor: pointer;
  float: right;

  &.cancel {
    background: url(${cancel}) no-repeat;
    background-size: 100% 100%;
  }
  &.comment {
    background: url(${comment}) no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26),
      0 2px 10px 0 rgba(0, 0, 0, 0.22);
  }
  &.reply {
    background: url(${reply}) no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26),
      0 2px 10px 0 rgba(0, 0, 0, 0.22);
  }
`;
