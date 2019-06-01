import React, { useRef, useEffect } from "react";
import { StyledBgCanvas } from "./BgcanvasStyle";
import {Circle, mouse} from "./Circle";

const BgCanvas = React.memo(() => {
  const canvasRef = useRef(null);

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
    const canvas = canvasRef.current;
    canvas.width =
      parseInt(window.getComputedStyle(canvas, null)["width"]) *
      devicePixelRatio;
    canvas.height =
      parseInt(window.getComputedStyle(canvas, null)["height"]) *
      devicePixelRatio;
    const ctx = canvas.getContext("2d");

    const circleArray = [];
    for (let i = 0; i < 500; i++) {
      const radius = Math.random() * 4 + 1;
      const x = Math.random() * (window.innerWidth - 2 * radius) + radius;
      const y = Math.random() * (window.innerHeight - 2 * radius) + radius;
      const vx = Math.random() - 0.5;
      const vy = Math.random() - 0.5;
      const circleColor = "#FFD747";

      circleArray.push(new Circle(ctx, x, y, vx, vy, radius, circleColor));
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight * 2);
      circleArray.forEach(circle => {
        circle.update();
      });
    }
    animate();
  }, []);
  return <StyledBgCanvas ref={canvasRef} />;
});

export default BgCanvas;
