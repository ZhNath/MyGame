import Num from "./Numbers.js";

export default class ScoreCounter {
  constructor() {}

  static setScoreCount(scoreCounter) {
    ScoreCounter.scoreCounter = scoreCounter;
  }

  static draw(context, y) {
    let numInArray = ScoreCounter.scoreCounter.toString().split("").map(Number);
    let j = 0;
    for (let i = numInArray.length - 1; i >= 0; i--) {
      const index = numInArray[i];
      const func = Num.numbersVorCaunter[index];
      func(context, Num.numPositions[3 - j], y);
      j++;
    }
  }
}
