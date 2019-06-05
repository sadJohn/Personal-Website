import React from "react";
import { StyledInfo, Title, P, Img } from "./style";
import rowlet from "../../../../../assets/images/rowlet.png"


const Info = React.memo(() => {
  return (
    <StyledInfo>
      <Img src={rowlet} />
      <Title>About me</Title>
      <P>Hey! I'm Johan, a collage student.</P>
      <Title>Hobbies</Title>
      <P>I like coding, reading and Pokemon</P>
    </StyledInfo>
  );
});

export default Info;
