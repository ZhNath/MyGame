import Eggs from "./Eggs.js";

export default class EggsGroup {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
    this.arrayEggs = [];
    this.createEggs();
  }

  createEggs() {
    let angle = Math.PI;
    for (let i = -2; i <= 3; i++) {
      if (i != 0) {
        const egg = new Eggs(
          (this.x += 13 * this.k),
          (this.y += 9.1),
          angle / i
        );
        this.arrayEggs.push(egg);
      }
    }
  }

  draw(context) {
    this.arrayEggs.forEach((egg) => {
      egg.draw(context);
    });
  }
}
