import React, { useState, useEffect } from "react";
import { LearnLink, LearnImg, StyledLearn, Menu, MenuItem } from "./style";

const LearnItem = React.memo(({ id, href, src, alt, phase, onClick }) => {
  const [position, setPosition] = useState({
    x:
      ((window.innerWidth - 300) / 3) * Math.random() +
      phase * ((window.innerWidth - 300) / 3) +
      phase * 100,
    y: Math.random() * (window.innerHeight * 0.5)
  });

  useEffect(() => {
    setPosition({
      x:
        ((window.innerWidth - 300) / 3) * Math.random() +
        phase * ((window.innerWidth - 300) / 3) +
        phase * 100,
      y: Math.random() * (window.innerHeight * 0.5)
    });
  }, [phase]);

  useEffect(() => {
    let x;
    let y;
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let intervalID;

    intervalID = setInterval(() => {
      setPosition(prevPosition => {
        if (
          prevPosition.x > ((phase + 1) * window.innerWidth) / 3 - 100 ||
          prevPosition.x < (phase * window.innerWidth) / 3
        ) {
          dx = -dx;
        }
        if (
          prevPosition.y > window.innerHeight * 0.9 - 180 ||
          prevPosition.y < -80
        ) {
          dy = -dy;
        }
        x = prevPosition.x + dx;
        y = prevPosition.y + dy;
        return { x, y };
      });
    }, 0);
    return () => {
      clearInterval(intervalID);
    };
  }, [phase]);
  return (
    <StyledLearn
      style={{
        transform: `translate(${position.x}px,${position.y}px)`
      }}
    >
      <Menu className="menu" phase={phase}>
        {[0, 1, 2].map(p =>
          p === phase ? null : (
            <MenuItem key={p} onClick={onClick} data-value={p} data-id={id}>
              {["Confident", "Learning", "NotYet"][p]}
            </MenuItem>
          )
        )}
      </Menu>
      <LearnLink href={href}>
        <LearnImg src={src} alt={alt} />
      </LearnLink>
    </StyledLearn>
  );
});

export default LearnItem;
