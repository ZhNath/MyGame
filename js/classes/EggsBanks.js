import { Egg } from "./Drawing.js";
import Color from "./Color.js";

export default class EggsBanks {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
    this.activeColor = "black";
    this.passiveColor = Color.screen.shadow;
    this.drawEggs = [];
    this.createBank();
  }

  static setPlayEggs(array) {
    EggsBanks.playEggs = array;
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

  draw(context, index) {
    this.drawEggs.forEach((egg) => {
      egg.draw(context, this.passiveColor);
    });

    EggsBanks.playEggs.forEach((poz) => {
      if (poz[1] === index) this.drawEggs[poz[0]].draw(context, "black");
    });
  }
}
