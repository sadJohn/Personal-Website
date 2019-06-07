export const mouse = {
  x: undefined,
  y: undefined
};

const maxRadius = 25;
const maxDistance = 10000;
const minDistance = 25;
const introColor = ["#424140", "#91D9CC", "#F2E63D", "#FF6161", "#00D2B4"];
const projectsColor = ["#233027", "#7D6B7D", "#D6FFF1", "#FFF587", "#FF8C64"];
const learnColor = ["#FF8A47", "#FC6170", "#8CEEEE", "#26BFBF", "#FFD747"];

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
    this.introColor = introColor[Math.floor(Math.random() * 5)];
    this.projectsColor = projectsColor[Math.floor(Math.random() * 5)];
    this.learnColor = learnColor[Math.floor(Math.random() * 5)];
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
      this.y + this.radius > window.innerHeight * 4 ||
      (this.y + this.radius > window.innerHeight * 3 - 0.5 &&
        this.y - this.radius < window.innerHeight * 3 + 0.5) ||
      (this.y + this.radius > window.innerHeight * 2 - 0.5 &&
        this.y - this.radius < window.innerHeight * 2 + 0.5) ||
      (this.y + this.radius > window.innerHeight - 0.5 &&
        this.y - this.radius < window.innerHeight + 0.5) ||
      this.y - this.radius < 0
    ) {
      this.vy = -this.vy;
    }

    if (
      this.y < window.innerHeight * 4 &&
      this.y > window.innerHeight * 3 + 0.5
    ) {
      this.circleColor = this.learnColor;
    } else if (
      this.y < window.innerHeight * 3 &&
      this.y > window.innerHeight * 2 + 0.5
    ) {
      this.circleColor = this.projectsColor;
    } else if (
      this.y < window.innerHeight * 2 &&
      this.y > window.innerHeight + 0.5
    ) {
      this.circleColor = this.introColor;
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
