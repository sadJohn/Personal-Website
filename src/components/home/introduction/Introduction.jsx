import React from "react";
import Info from "./Info/Info";
import Profile from "./Profile/Profile";
import { StyledIntro } from './IntroductionStyle';

const Introduction = props => {
  return (
    <StyledIntro>
      <Profile/>
      <Info />
    </StyledIntro>
  );
};

export default Introduction;
