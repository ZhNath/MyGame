import Egg from "./Egg.js";
import Color from "./Color.js";
import Bunny from "./Bunny.js";
import Num, { Numbers } from "./Numbers.js";

export default class EggsGroup {
  static playEggs = [];
  static scoreCounter = 0;
  static faultTempCounter = 0;
  static wolfPoz;

  constructor(x, y, k, game) {
    this.x = x;
    this.y = y;
    this.k = k;
    this.activeColor = "black";
    this.passiveColor = Color.screen.shadow;
    this.drawEggs = [];
    this.createBank();
    this.pastTime = 0;
  }

  createBank() {
    let angle = Math.PI;
    for (let i = -2; i <= 3; i++) {
      if (i != 0) {
        const egg = new Egg(
          (this.x += 13 * this.k),
          (this.y += 9.1),
          angle / i
        );
        this.drawEggs.push(egg);
      }
    }
    const eggFlag = new Egg(this.x, 290, 0);
    this.drawEggs.push(eggFlag);
  }

  drawBank(context, index) {
    this.drawEggs.forEach((egg) => {
      egg.draw(context, this.passiveColor);
    });

    EggsGroup.playEggs.forEach((poz) => {
      if (poz[1] === index) this.drawEggs[poz[0]].draw(context, "black");
    });
  }

  static setWolfPoz(position) {
    EggsGroup.wolfPoz = position;
    if (
      EggsGroup.playEggs[0][1] === position - 1 &&
      EggsGroup.playEggs[0][0] === 4
    ) {
      EggsGroup.playEggs.shift();
      EggsGroup.scoreCounter++;
    }
  }

  update(realTime) {
    let delta = realTime - this.pastTime;
    //     *****
    if (delta > 700) {
      for (let i = 0; i < EggsGroup.playEggs.length; i++) {
        EggsGroup.playEggs[i][0]++;
      }

      let index = Math.floor(Math.random() * 4);
      EggsGroup.playEggs.push([0, index]);

      if (EggsGroup.playEggs.length) {
        if (EggsGroup.playEggs[0][0] === 5) {
          if (EggsGroup.wolfPoz - 1 === EggsGroup.playEggs[0][1]) {
            EggsGroup.playEggs.shift();
            EggsGroup.scoreCounter++;
          } else {
            EggsGroup.playEggs.length = 0;
            EggsGroup.faultTempCounter += Bunny.isBunny ? 0.5 : 1;
            realTime += 3000;
          }
        }
      }

      this.pastTime = realTime;
    }
  }

  // static draw(context) {
  //   context.font = "24px Calculator";
  //   context.fillStyle = "black";
  //   context.fillText(EggsGroup.scoreCounter, 50, 50);
  //   context.fillText(EggsGroup.faultCounter, 150, 50);
}
