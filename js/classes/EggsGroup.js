import Egg from "./Egg.js";
import Color from "./Color.js";

export default class EggsGroup {
  static playEggs = [];
  static counter = 0;

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

  update(realTime) {
    let delta = realTime - this.pastTime;
    if (delta > 1000) {
      for (let i = 0; i < EggsGroup.playEggs.length; i++) {
        EggsGroup.playEggs[i][0]++;
        if (EggsGroup.playEggs[i][0] === 5) {
          EggsGroup.playEggs.length = 0;
          EggsGroup.counter++;
        }
      }

      let index = Math.floor(Math.random() * 4);
      EggsGroup.playEggs.push([0, index]);

      this.pastTime = realTime;
    }
  }
  static draw(context) {
    context.font = "24px Arial";
    context.fillStyle = "black";
    context.fillText(EggsGroup.counter, 150, 50);
  }
}
