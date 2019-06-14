import React, { useState, useEffect, useRef } from "react";
import { LearnLink, LearnImg, StyledLearn, Menu, MenuItem } from "./style";

const LearnItem = React.memo(({ id, href, src, alt, phase, onClick }) => {
  const [position, setPosition] = useState({
    x:
      ((window.innerWidth - 300) / 3) * Math.random() +
      phase * ((window.innerWidth - 300) / 3) +
      phase * 100,
    y: Math.random() * (window.innerHeight * 0.5)
  });
  const learnItem = useRef(null);

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
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let intervalID;

    intervalID = setInterval(() => {
      setPosition(prevPosition => {
        if (
          prevPosition.x >
            ((phase + 1) * window.innerWidth) / 3 -
              learnItem.current.offsetWidth ||
          prevPosition.x < (phase * window.innerWidth) / 3
        ) {
          dx = -dx;
        }
        if (
          prevPosition.y >
            window.innerHeight * 0.9 - learnItem.current.offsetHeight ||
          prevPosition.y < -80
        ) {
          dy = -dy;
        }
        x = prevPosition.x + dx;
        y = prevPosition.y + dy;
        return { x, y };
      });
    }, 16);
    return () => {
      clearInterval(intervalID);
    };
  }, [phase]);
  return (
    <StyledLearn
      ref={learnItem}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`
      }}
    >
      {window.innerWidth > 600 ? (
        <Menu className="menu" phase={phase}>
          {[0, 1, 2].map(p =>
            p === phase ? null : (
              <MenuItem key={p} onClick={onClick} data-value={p} data-id={id}>
                {["Confident", "Learning", "NotYet"][p]}
              </MenuItem>
            )
          )}
        </Menu>
      ) : null}

      <LearnLink href={href}>
        <LearnImg src={src} alt={alt} />
      </LearnLink>
    </StyledLearn>
  );
});

export default LearnItem;
