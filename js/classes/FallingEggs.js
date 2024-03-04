import Controller from "./Controller.js";

export default class FallingEggs {
  constructor() {
    this.faultEggs = [
      [new Image(), 230, 280, 30],
      [new Image(), 217, 270, 15],
      [new Image(), 200, 280, 15],
      [new Image(), 180, 280, 15],
      [new Image(), 160, 280, 15],
    ];

    this.faultEggs[0][0].src = "../../images/1fall.svg";
    this.faultEggs[1][0].src = "../../images/2fall.svg";
    this.faultEggs[2][0].src = "../../images/3fall.svg";
    this.faultEggs[3][0].src = "../../images/4fall.svg";
    this.faultEggs[4][0].src = "../../images/5fall.svg";

    this.pastTime = 0;

    this.poz = 0;
  }
  // 230, 280, 30, 15
  draw(context) {
    if (Controller.isFall) {
      context.drawImage(
        this.faultEggs[this.poz][0],
        this.faultEggs[this.poz][1],
        this.faultEggs[this.poz][2],
        this.faultEggs[this.poz][3],
        15
      );
    }
  }

  update(realTime) {
    let delta = realTime - this.pastTime;

    if (delta > 2500) {
      Controller.isFall = false;
    }

    if (delta > 500) {
      if (Controller.isBunny) {
        this.poz++;
      }
      this.pastTime = realTime;
      Controller.isFall = false;
    }
  }
}
