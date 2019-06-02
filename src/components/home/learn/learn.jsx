import React, { useState } from "react";
import learnList from "./learnList";
import { Container, Category, Title } from "./style";
import LearnItem from "./learnItem/LearnItem";

const Learn = React.memo(() => {
  const [list, setList] = useState(learnList);
  const moveHandler = e => {
    const newList = [...list];
    const targetIndex = learnList.findIndex(
      learnListItem => learnListItem.id === +e.target.dataset.id
    );
    newList[targetIndex].phase = +e.target.value;
    setList(newList);
  };
  return (
    <Container>
      <Category>
        <Title>Confident?</Title>
        <Title>Learning...</Title>
        <Title>NotYet!</Title>
      </Category>
      {list.map(learnListItem => {
        console.log('learnListItem.phase = ', learnListItem.phase)
        return (
          <LearnItem
            key={learnListItem.id}
            {...learnListItem}
            onClick={moveHandler}
          />
        )
      })}
    </Container>
  );
});

export default Learn;
