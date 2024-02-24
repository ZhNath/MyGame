import Egg from "./Egg.js";

export default class EggsGroup {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
    this.arrayEgg = [];
    this.createEggs();
  }

  createEggs() {
    let angle = Math.PI;
    for (let i = -2; i <= 3; i++) {
      if (i != 0) {
        const egg = new Egg(
          (this.x += 13 * this.k),
          (this.y += 9.1),
          angle / i
        );
        this.arrayEgg.push(egg);
      }
    }
  }

  drawBank(context, color) {
    this.arrayEgg.forEach((egg) => {
      egg.draw(context, color);
    });
  }

  drawEgg(context, color, i) {
    this.arrayEgg[i].draw(context, color);
    alert(`kdjf`);
  }
}
