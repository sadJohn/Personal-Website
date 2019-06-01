import React from "react";
import { StyledWelcome } from "./style";

const Welcome = React.memo(() => {
  return <StyledWelcome>Welcome to my website!</StyledWelcome>;
});

export default Welcome;
