import React from "react";
import learnList from "./learnList";
import { Container } from "./style";
import LearnItem from "./learnItem/LearnItem";

const Learn = React.memo(() => {
  return (
    <Container>
      {learnList.map(learnListItem => (
        <LearnItem {...learnListItem} />
      ))}
    </Container>
  );
});

export default Learn;
