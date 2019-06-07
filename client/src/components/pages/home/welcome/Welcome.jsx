import React from "react";
import { StyledWelcome, Title, SubTitle } from "./style";

const Welcome = React.memo(() => {
  return (
    <StyledWelcome>
      <Title>I'm Johan.</Title>
      <SubTitle>a web developer.</SubTitle>
    </StyledWelcome>
  );
});

export default Welcome;
