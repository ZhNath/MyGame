import Color from "./Color.js";

export default class Bunny {
  isBunny = false;

  constructor() {
    this.pastTime = 0;
    this.color = Color.screen.shadow;
    this.bunny = new Image();
  }

  draw(context) {
    this.bunny.src = "../../images/rabbit.svg";
    context.drawImage(this.bunny, 215, 100, 80, 70);
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
