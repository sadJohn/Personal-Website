import React, { useState, useEffect } from "react";
import learnList from "./learnList";
import { LearnLink, LearnImg, Container } from "./style";
import { Motion } from "react-motion";

const listArray = [];
for (let i = 0; i < learnList.length; i++) {
  listArray.push({
    x: Math.random() * (window.innerWidth - 200),
    y: Math.random() * (window.innerHeight - 200)
  });
}

const Learn = React.memo(() => {
  const [position, setPosition] = useState(listArray);
  useEffect(() => {
    listArray.forEach((positionItem, index) => {
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let x, y;
      function animate() {
        setPosition(prevPosition => {
          if (
            prevPosition[index].x > window.innerWidth - 100 ||
            prevPosition[index].x < 0
          ) {
            dx = -dx;
          }
          if (
            prevPosition[index].y > window.innerHeight * 0.9 - 100 ||
            prevPosition[index].y < 0
          ) {
            dy = -dy;
          }
          x = prevPosition[index].x + dx;
          y = prevPosition[index].y + dy;
          let newPosition = [...prevPosition];
          newPosition.splice(index, 1, { x, y });
          return newPosition;
        });
        requestAnimationFrame(animate);
      }
      animate();
    });
  }, []);

  return (
    <Container>
      {learnList.map(({ key, href, src, alt }) => {
        return (
          <Motion key={key} style={{ x: position[key].x, y: position[key].y }}>
            {interpolatingStyle => {
              return (
                <LearnLink
                  style={{
                    transform: `translate(${interpolatingStyle.x}px,${
                      interpolatingStyle.y
                    }px)`
                  }}
                  href={href}
                >
                  <LearnImg src={src} alt={alt} />
                </LearnLink>
              );
            }}
          </Motion>
        );
      })}
    </Container>
  );
});

export default Learn;
