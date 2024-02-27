import Color from "./Color.js";

export default class FaultElem {
  constructor(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
  }
  static color = Color.screen.shadow;

  static draw(context, x, y) {
    context.beginPath();
    context.fillStyle = FaultElem.color;
    context.arc(x, y, 7, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
}

export class FaultElemBlink extends FaultElem {
  constructor(context, x, y) {
    super(context, x, y);
    this.pastTime = 0;
  }

  update(realTime) {
    let delta = realTime - this.pastTime;
    if (delta > 1000) {
      FaultElem.color =
        FaultElem.color === Color.screen.shadow ? "black" : Color.screen.shadow;
      this.pastTime = realTime;
    }
  }
}
