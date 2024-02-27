import Color from "./Color.js";
import EggsGroup from "./EggsGroup.js";

export default class FaultElem {
  constructor(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.pastTime = 0;
    this.min, this.max;
    this.faultCounter = EggsGroup.faultTempCounter;
  }
  color;
  // faultCounter;

  draw(context, x, y, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, 7, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  update(realTime) {
    let min, max;
    let delta = realTime - this.pastTime;
    min = EggsGroup.faultTempCounter - 0.5;
    max = EggsGroup.faultTempCounter + 0.5;
    if (delta > 1000) {
      if (EggsGroup.faultTempCounter % 1 !== 0) {
        this.faultCounter = this.faultCounter === min ? max : min;
      } else this.faultCounter = EggsGroup.faultTempCounter;
      this.pastTime = realTime;
    }
  }
}
