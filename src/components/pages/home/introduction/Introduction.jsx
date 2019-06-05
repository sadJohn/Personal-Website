import React from "react";
import Info from "./Info/Info";
import Profile from "./Profile/Profile";
import { StyledIntro } from './style';

const Introduction = React.memo(() => {
  return (
    <StyledIntro>
      <Profile/>
      <Info />
    </StyledIntro>
  );
});

export default Introduction;
