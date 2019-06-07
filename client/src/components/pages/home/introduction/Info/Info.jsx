import React from "react";
import { StyledInfo, Title, P, Img } from "./style";
import rowlet from "../../../../../assets/images/rowlet.png";

const Info = React.memo(() => {
  return (
    <StyledInfo>
      <Img src={rowlet} />
      <Title>About me</Title>
      <P>
        Hey! I'm Johan, a collage student based in HangZhou, China. I have a
        passion for web developement and love to create for web.
      </P>
      <Title>Hobbies</Title>
      <P>
        I like coding, especially web developement and computer graphics. I like
        reading, you like <i>Love in the Time of Cholera</i>? We are friends! I like
        Pokémon, do you know the Pokémon in the upper right corner?
      </P>
      <Title>Coal</Title>
      <P>
        <ul>
          <li>Graduate.</li>
          <li>Find a job.</li>
          <li>Buy a Nintendo Switch.</li>
          <li>Make a girlfriend. (1%)</li>
          <li>...</li>
        </ul>
      </P>
    </StyledInfo>
  );
});

export default Info;
