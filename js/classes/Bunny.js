import Color from "./Color.js";

export default class Bunny {
  isBunny = false;

  constructor() {
    this.pastTime = 0;
    this.color = Color.screen.shadow;
    this.bunny = new Image();
    this.link = "../../images/rabbit_shadow.svg";
  }

  draw(context) {
    this.bunny.src = this.link;
    context.drawImage(this.bunny, 215, 100, 80, 70);
  }

  update(realTime) {
    let delta = realTime - this.pastTime;
    if (this.link === "../../images/rabbit_shadow.svg") {
      if (delta > 16e3) {
        this.link = "../../images/rabbit.svg";

        this.pastTime = realTime;
        this.isBunny = true;
      }
    } else if (delta > 8e3) {
      this.link = "../../images/rabbit_shadow.svg";
      this.pastTime = realTime;
      this.isBunny = false;
    }
  }
}
