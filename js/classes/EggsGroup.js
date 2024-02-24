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
    this.playEggs = [4, 2];
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

  drawBank(context) {
    this.drawEggs.forEach((egg) => {
      egg.draw(context, this.passiveColor);
    });
    this.playEggs.forEach((poz) => {
      this.drawEggs[poz].draw(context, "black");
    });
  }

  update(realTime) {
    console.log(this.playEggs);
    let delta = realTime - this.pastTime;
    if (delta > 2000) {
      if (this.playEggs[0] === 4) this.playEggs.shift();

      for (let i = 0; i < this.playEggs.length; i++) {
        this.playEggs[i]++;
      }
      console.log(this.playEggs);
      this.playEggs.push(0);
      console.log(this.playEggs);

      this.pastTime = realTime;
    }
  }
}
