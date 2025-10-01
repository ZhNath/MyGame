import Controller from "./Controller.js";

export default class FallingEggs {
  constructor() {
    this.faultEggsLeft = [
      [new Image(), 230, 280, 30],
      [new Image(), 217, 270, 15],
      [new Image(), 200, 280, 15],
      [new Image(), 180, 280, 15],
      [new Image(), 160, 280, 15],
    ];
    this.faultEggsLeft[0][0].src = "/images/1fall.svg";
    this.faultEggsLeft[1][0].src = "/images/2fall.svg";
    this.faultEggsLeft[2][0].src = "/images/3fall.svg";
    this.faultEggsLeft[3][0].src = "/images/4fall.svg";
    this.faultEggsLeft[4][0].src = "/images/5fall.svg";

    this.faultEggsRight = [
      [new Image(), -368, 280, 30, 15],
      [new Image(), -381, 270, 15, 15],
      [new Image(), -398, 280, 15, 15],
      [new Image(), -418, 280, 15, 15],
      [new Image(), -438, 280, 15, 15],
    ];
    this.faultEggsRight[0][0].src = "/images/1fall.svg";
    this.faultEggsRight[1][0].src = "/images/2fall.svg";
    this.faultEggsRight[2][0].src = "/images/3fall.svg";
    this.faultEggsRight[3][0].src = "/images/4fall.svg";
    this.faultEggsRight[4][0].src = "/images/5fall.svg";

    this.pastTime = 0;

    this.poz = 0;
  }

  draw(context) {
    if (Controller.isFall) {
      if (Controller.lastEggPoz === 0 || Controller.lastEggPoz === 1) {
        context.drawImage(
          this.faultEggsLeft[this.poz][0],
          this.faultEggsLeft[this.poz][1],
          this.faultEggsLeft[this.poz][2],
          this.faultEggsLeft[this.poz][3],
          15
        );
      }
      if (Controller.lastEggPoz === 2 || Controller.lastEggPoz === 3) {
        context.save();
        context.scale(-1, 1);
        context.drawImage(
          this.faultEggsRight[this.poz][0],
          this.faultEggsRight[this.poz][1],
          this.faultEggsRight[this.poz][2],
          this.faultEggsRight[this.poz][3],
          15
        );
        context.restore();
      }
    }
  }

  update(realTime) {
    let delta = realTime - this.pastTime;

    if (!Controller.isBunny) {
      if (delta > 2500) {
        Controller.isFall = false;
        this.pastTime = realTime;
      }
    }

    if (Controller.isBunny && Controller.isFall) {
      if (delta > 400) {
        this.poz++;
        if (this.poz === 5) {
          Controller.isFall = false;
          Controller.isBunny = false;
          this.poz = 0;
        }
        this.pastTime = realTime;
      }
    }
  }
}
