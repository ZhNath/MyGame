import Egg from "./Egg.js";
import Color from "./Color.js";

export default class EggsGroup {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
    this.activeColor = "black";
    this.passiveColor = Color.screen.shadow;
    this.drawEggs = [];
    this.playEggs = [[0, 0]];
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
  }

  drawBank(context, index) {
    this.drawEggs.forEach((egg) => {
      egg.draw(context, this.passiveColor);
    });
    this.playEggs.forEach((poz) => {
      if (poz[1] === index) this.drawEggs[poz[0]].draw(context, "black");
    });
  }

  update(realTime) {
    //     console.log(this.playEggs);
    let delta = realTime - this.pastTime;
    if (delta > 500) {
      console.log(this.playEggs[0][0]);
      if (this.playEggs[0][0] === 4) this.playEggs.shift();

      for (let i = 0; i < this.playEggs.length; i++) {
        this.playEggs[i][0]++;
      }

      let index = Math.floor(Math.random() * 4);
      this.playEggs.push([0, index]);

      this.pastTime = realTime;
    }
  }
}
