export const mouse = {
  x: undefined,
  y: undefined
};

const maxRadius = 25;
const maxDistance = 10000;
const minDistance = 25;

export class Circle {
  constructor(ctx, x, y, vx, vy, radius, circleColor) {
    this.ctx = ctx;
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
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.circleColor;
    this.ctx.fill();
  }

  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = dx * dx + dy * dy;

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
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
      this.circleColor = "rgb(50, 54, 57)";
    } else {
      this.circleColor = this.origincircleColor;
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

