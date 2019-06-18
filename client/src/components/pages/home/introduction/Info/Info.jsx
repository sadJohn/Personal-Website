import React from "react";
import { StyledInfo, Title, P } from "./style";

const Info = React.memo(() => {
  return (
    <StyledInfo>
      <Title>About me</Title>
      <P>
        Hey! I'm Johan, a college student based in HangZhou, China. I have a
        passion for web developement and love to create for web.
      </P>
      <Title>Hobbies</Title>
      <P>
        I like coding, especially web developement and computer graphics. You
        can find out some projects I made in the section below. I like reading,
        do you like <i>Love in the Time of Cholera</i>? If so, we are friends! I
        like Pokémon, do you know the Pokémon in the upper left corner? Can't
        wait to play Pokémon Sword and Shield!
      </P>
      <Title>Coals</Title>
      <P>
        <ul>
          <li>Graduate.</li>
          <li>Find a job.</li>
          <li>Buy a Nintendo Switch.</li>
          <li>Make new friends</li>
          <li>Make a girlfriend. (1%)</li>
          <li>Realize all the above wishes</li>
        </ul>
      </P>
    </StyledInfo>
  );
});

export default Info;
