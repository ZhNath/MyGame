import Num from "./Numbers.js";
import Color from "./Color.js";
import FaultCounter from "./FaultCounter.js";

export default class ShadowLayer {
  constructor() {
    this.fall1_shadow = new Image();
    this.fall2_shadow = new Image();
    this.fall3_shadow = new Image();
    this.fall4_shadow = new Image();
    this.fall5_shadow = new Image();

    this.fall1_shadow.src = "/images/1fall _shadow.svg";
    this.fall2_shadow.src = "/images/2fall_shadow.svg";
    this.fall3_shadow.src = "/images/3fall_shadow.svg";
    this.fall4_shadow.src = "/images/4fall_shadow.svg";
    this.fall5_shadow.src = "/images/5fall_shadow.svg";

    this.bunny_shadow = new Image();
    this.bunny_shadow.src = "/images/rabbit_shadow.svg";

    this.live_shadow = new FaultCounter();
  }

  draw(context) {
    let x1 = 230;
    let x2 = -355;

    context.drawImage(this.fall1_shadow, x1, 280, 30, 15);
    context.drawImage(this.fall2_shadow, x1 - 13, 270, 15, 15);
    context.drawImage(this.fall3_shadow, x1 - 30, 280, 15, 15);
    context.drawImage(this.fall4_shadow, x1 - 50, 280, 15, 15);
    context.drawImage(this.fall5_shadow, x1 - 70, 280, 15, 15);

    context.save();
    context.scale(-1, 1);
    context.drawImage(this.fall1_shadow, x2 - 13, 280, 30, 15);
    context.drawImage(this.fall2_shadow, x2 - 26, 270, 15, 15);
    context.drawImage(this.fall3_shadow, x2 - 43, 280, 15, 15);
    context.drawImage(this.fall4_shadow, x2 - 63, 280, 15, 15);
    context.drawImage(this.fall5_shadow, x2 - 83, 280, 15, 15);
    context.restore();

    context.drawImage(this.bunny_shadow, 215, 100, 80, 70);
    for (let i = 0; i < 4; i++) {
      Num.drawShadowNum(context, 300 + 16 * i, 110, Color.screen.shadow);
    }

    for (let i = 0; i < 3; i++) {
      this.live_shadow.draw_shadow(context, 347 - i * 16, 150);
    }
  }
}
