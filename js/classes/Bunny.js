import Color from "./Color.js";

export default class Bunny {
  isBunny = false;

  constructor() {
    this.pastTime = 0;
    this.color = Color.screen.shadow;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(230, 130, 10, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  update(realTime) {
    let delta = realTime - this.pastTime;
    if (this.color == Color.screen.shadow) {
      if (delta > 3e4) {
        this.color = "rgba(0,0,255,1)";
        this.pastTime = realTime;
        this.isBunny = true;
      }
    } else if (delta > 7e3) {
      this.color = Color.screen.shadow;
      this.pastTime = realTime;
      this.isBunny = false;
    }
  }
}
