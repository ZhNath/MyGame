import Controller from "./Controller.js";

export default class FallingEggs {
  constructor() {
    this.faultEggs = [
      new Image(),
      new Image(),
      new Image(),
      new Image(),
      new Image(),
    ];
    this.faultEggs[0].src = "../../images/1fall.svg";
    this.faultEggs[1].src = "../../images/2fall.svg";
    this.faultEggs[2].src = "../../images/3fall.svg";
    this.faultEggs[3].src = "../../images/4fall.svg";
    this.faultEggs[4].src = "../../images/5fall.svg";

    this.pastTime = 0;
  }

  draw(context) {
    if (Controller.isFall) {
      context.drawImage(this.faultEggs[0], 230, 280, 30, 15);
      if (Controller.isBunny) {
        context.drawImage(this.faultEggs[1], 217, 270, 15, 15);
        for (let i = 2; i < 5; i++) {
          context.drawImage(this.faultEggs[i], 200 - 20 * (i - 2), 280, 15, 15);
        }
      }
    }
  }

  update1(realTime, delta1) {
    let delta = realTime - this.pastTime;
    if (delta > 400) {
      delta1 += delta;
    }
    if (delta1 > 2500) {
      Controller.isFall = false;
      this.pastTime = realTime;
    }
  }
}
