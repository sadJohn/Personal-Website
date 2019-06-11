import React, { useState, useEffect } from "react";
import learnList from "./learnList";
import { Container, Category, Title } from "./style";
import LearnItem from "./learnItem/LearnItem";

const Learn = React.memo(() => {
  const [list, setList] = useState(learnList);

  
  useEffect(() => {
    const fatchLearnPhase = async () => {
      const response = await fetch('/api/learnPhase')
      const learnPhase = await response.json()
      const newList = list.map(learnItem => {
        const phase = learnPhase.find(item => item.id === learnItem.id);
        return { ...learnItem, ...phase };
      });
      setList(newList)
    }
    fatchLearnPhase()
  }, [list])

  const moveHandler = async e => {
    const newList = [...list];
    const targetIndex = learnList.findIndex(
      learnListItem => learnListItem.id === +e.target.dataset.id
    );
    const id = newList[targetIndex].id
    const phase = +e.target.dataset.value;
    const data = { id, phase };

    const state = await fetch("/api/learnPhase", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const result = await state.json();
    alert(result.status);
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
        return (
          <LearnItem
            key={learnListItem.id}
            {...learnListItem}
            onClick={moveHandler}
          />
        );
      })}
    </Container>
  );
});

export default Learn;
