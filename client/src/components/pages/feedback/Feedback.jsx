import React from "react";
import Comment from "./comment/Comment";
import { Wrapper } from "./style";

const Feedback = () => {
  return (
    <Wrapper>
      <h1 style={{height: "500px"}}>Page Feedback</h1>
      <Comment />
    </Wrapper>
  );
};

export default Feedback;
