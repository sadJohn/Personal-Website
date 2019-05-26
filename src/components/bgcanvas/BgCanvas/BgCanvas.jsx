import React, { useRef, useEffect } from "react";
import { StyledBgCanvas } from "./BgcanvasStyle";

const BgCanvas = React.memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width =
      parseInt(window.getComputedStyle(canvas, null)["width"]) *
      devicePixelRatio;
    canvas.height =
      parseInt(window.getComputedStyle(canvas, null)["height"]) *
      devicePixelRatio;
    const ctx = canvas.getContext("2d");

    const mouse = {
      x: undefined,
      y: undefined
    };

    const maxRadius = 25;
    const maxDistance = 10000;
    const minDistance = 25;

    function mousemoveHandler(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }
    window.addEventListener("mousemove", mousemoveHandler);

    class Circle {
      constructor(x, y, vx, vy, radius, circleColor) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.originRadius = radius;
        this.circleColor = circleColor;
        this.origincircleColor = circleColor;
        this.v = 0.05;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = this.circleColor;
        // ctx.stroke();
        ctx.fillStyle = this.circleColor;
        ctx.fill();
        
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = dx * dx + dy * dy;

        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.vx = -this.vx;
        }
        if (
          (this.y + this.radius > window.innerHeight - 0.5 &&
            this.y - this.radius < window.innerHeight + 0.5) ||
          this.y + this.radius > window.innerHeight * 2 ||
          this.y - this.radius < 0
        ) {
          this.vy = -this.vy;
        }
        if (this.y < window.innerHeight * 2 && this.y > window.innerHeight + 0.5) {
          this.circleColor = "rgb(50, 54, 57)"
        } else {
          this.circleColor = this.origincircleColor
        }

        if (
          distance < maxDistance &&
          distance > -maxDistance &&
          distance < maxDistance &&
          distance > -maxDistance
        ) {
          if (this.radius < maxRadius) {
            this.radius++;
          }
          if (
            distance > minDistance &&
            distance < -minDistance &&
            distance > minDistance &&
            distance < -minDistance
          )
            return;
          this.x += this.v * dx;
          this.y += this.v * dy;
        } else {
          if (this.radius > this.originRadius) {
            this.radius--;
          }
          this.x += this.vx;
          this.y += this.vy;
        }

        this.draw();
      }
    }

    const circleArray = [];
    // const circleColors = ["#FF8A47", "#FC6170", "#8CEEEE", "#26BFBF"];
    // const circleColor = "#FFD747";
    for (let i = 0; i < 500; i++) {
      const radius = Math.random() * 4 + 1;
      const x = Math.random() * (window.innerWidth - 2 * radius) + radius;
      const y = Math.random() * (window.innerHeight - 2 * radius) + radius;
      const vx = Math.random() - 0.5;
      const vy = Math.random() - 0.5;
      const circleColor = "#FFD747";

      circleArray.push(new Circle(x, y, vx, vy, radius, circleColor));
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight * 2);
      circleArray.forEach(circle => {
        circle.update();
      });
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  });
  return <StyledBgCanvas ref={canvasRef} />;
});

export default BgCanvas;
