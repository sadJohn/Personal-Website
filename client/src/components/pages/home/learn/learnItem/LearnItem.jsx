import React, { useState, useEffect } from "react";
import { LearnLink, LearnImg, StyledLearn, Menu, MenuItem } from "./style";

const windowWidth = window.innerWidth;
const LearnItem = React.memo(({ id, href, src, alt, phase, onClick }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [itemWidth, setItemWidth] = useState(width < 600 ? 50 : 100);
  const [itemHeight, setItemHeight] = useState(width < 600 ? 90 : 180);

  const [position, setPosition] = useState({
    x:
      Math.random() *
        ((width / 3) * phase + width / 3 - itemWidth - (width / 3) * phase) +
      (width / 3) * phase,
    y: Math.random() * (height * 0.5)
  });
  useEffect(() => {
    const onResize = () => {
      if (windowWidth > 450) {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        const itemWidth = window.innerWidth < 600 ? 50 : 100;
        setItemWidth(itemWidth);
        setItemHeight(window.innerHeight < 600 ? 90 : 180);
        setPosition({
          x:
            Math.random() *
              ((window.innerWidth / 3) * phase +
                window.innerWidth / 3 -
                itemWidth -
                (window.innerWidth / 3) * phase) +
            (window.innerWidth / 3) * phase,
          y: Math.random() * (window.innerHeight * 0.5)
        });
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [width, height, itemWidth, phase]);

  useEffect(() => {
    setPosition({
      x:
        Math.random() *
          ((width / 3) * phase + width / 3 - itemWidth - (width / 3) * phase) +
        (width / 3) * phase,
      y: Math.random() * (height * 0.5)
    });
  }, [phase, height, width, itemWidth]);

  useEffect(() => {
    let x;
    let y;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let intervalID;

    intervalID = setInterval(() => {
      setPosition(prevPosition => {
        if (
          prevPosition.x > ((phase + 1) * width) / 3 - itemWidth ||
          prevPosition.x < (phase * width) / 3
        ) {
          dx = -dx;
        }
        if (
          prevPosition.y > height * 0.9 - itemHeight ||
          prevPosition.y < -(itemHeight * 0.444)
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
  }, [phase, height, itemHeight, width, itemWidth]);
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
