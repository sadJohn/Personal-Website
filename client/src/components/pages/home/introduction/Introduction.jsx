import React from "react";
import Info from "./Info/Info";
import Profile from "./Profile/Profile";
import { StyledIntro, Img } from './style';
import rowlet from "../../../../assets/images/rowlet.png";

const Introduction = React.memo(() => {
  return (
    <StyledIntro>
      <Img src={rowlet} />
      <Profile/>
      <Info />
    </StyledIntro>
  );
});

export default Introduction;
