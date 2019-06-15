import styled from "styled-components";
import comment from "../../../../../assets/images/comment.png";
import reply from "../../../../../assets/images/reply.png";
import cancel from "../../../../../assets/images/cancel.png";

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
  width: 100%;
  height: 100%;
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
  padding-left: 1.25rem;
  font-size: 1.25rem;
  border-radius: 50px;
  outline: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;
export const Group = styled.div`
  position: absolute;
  width: 8rem;
  height: 2.5rem;
  top: 3rem;
  right: 1rem;
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
