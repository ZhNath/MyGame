import Num from "./Numbers.js";
import EggsGroup from "./EggsGroup.js";

export default class ScoreCounter {
  constructor() {}
  // static scoreCounter = 0;

  static draw(context, y) {
    let numInArray = EggsGroup.scoreCounter.toString().split("").map(Number);
    let j = 0;
    for (let i = numInArray.length - 1; i >= 0; i--) {
      const index = numInArray[i];
      const func = Num.array[index];
      func(context, Num.numPositions[3 - j], y);
      j++;
    }
  }
}
