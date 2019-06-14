import React, { useRef, useEffect } from "react";
import { StyledBgCanvas } from "./style";
import { Circle, mouse } from "./Circle";

const Canvas = React.memo(() => {
  const canvasRef = useRef(null);

  const initCanvas = () => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");
    const dpr =
      window.devicePixelRatio ||
      window.webkitDevicePixelRatio ||
      window.mozDevicePixelRatio ||
      1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 4;
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = Math.round(oldWidth * dpr);
    canvas.height = Math.round(oldHeight * dpr);

    canvas.style.width = oldWidth + "px";
    canvas.style.height = oldHeight + "px";
    ctx.scale(dpr, dpr);

    return ctx;
  };

  useEffect(() => {
    const setCanvas = () => initCanvas();
    window.addEventListener("resize", setCanvas);
    return () => {
      window.removeEventListener("resize", setCanvas);
    };
  }, []);

  useEffect(() => {
    function mousemoveHandler(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }
    window.addEventListener("mousemove", mousemoveHandler);
    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);
  useEffect(() => {
    let animationID;
    const ctx = initCanvas();

    const circleArray = [];
    // const colorArray = ["#FF8A47", "#FC6170", "#FFD747", "#9DD3D9", "#234D51"];
    const colorArray = ["#73513D", "#2F3B40", "#584D90", "#FAC61A", "#F23838"];
    for (let i = 0; i < 500; i++) {
      const radius = Math.random() * 4 + 1;
      const x = Math.random() * (window.innerWidth - 2 * radius) + radius;
      const y = Math.random() * (window.innerHeight - 2 * radius) + radius;
      const vx = Math.random() - 0.5;
      const vy = Math.random() - 0.5;
      const circleColor = colorArray[Math.floor(Math.random() * 5)];

      circleArray.push(new Circle(ctx, x, y, vx, vy, radius, circleColor));
    }
    function animate() {
      animationID = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight * 4);
      circleArray.forEach(circle => {
        circle.update(window.innerWidth, window.innerHeight);
      });
    }
    animate();

    return () => {
      cancelAnimationFrame(animationID);
    };
  }, []);
  
  return <StyledBgCanvas ref={canvasRef} />;
});

export default Canvas;
