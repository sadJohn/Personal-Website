import React, { useState, useEffect } from "react";
import { LearnLink, LearnImg } from "./style";

const LearnItem = React.memo(({ href, src, alt }) => {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - 200),
    y: Math.random() * (window.innerHeight - 200)
  });

  useEffect(() => {
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let x, y;
    function animate() {
      setPosition(prevPosition => {
        if (prevPosition.x > window.innerWidth - 100 || prevPosition.x < 0) {
          dx = -dx;
        }
        if (
          prevPosition.y > window.innerHeight * 0.9 - 100 ||
          prevPosition.y < 0
        ) {
          dy = -dy;
        }
        x = prevPosition.x + dx;
        y = prevPosition.y + dy;
        return { x, y };
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <LearnLink
      style={{
        transform: `translate(${position.x}px,${position.y}px)`
      }}
      href={href}
    >
      <LearnImg src={src} alt={alt} />
    </LearnLink>
  );
});

export default LearnItem;
