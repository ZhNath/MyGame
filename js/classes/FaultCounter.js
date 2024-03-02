export default class FaultCounter {
  constructor(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.pastTime = 0;
    this.past2Time = 0;
    this.delay;
    this.flag = 0;
    this.live = new Image();
    this.live_shadow = new Image();
  }
  color;

  setFaultCounter(faultTempCounter) {
    this.faultTempCounter = faultTempCounter;
  }

  draw_shadow(context, x, y) {
    this.live_shadow.src = "../../images/live_shadow.svg";
    context.drawImage(this.live_shadow, x, y, 15, 15);
  }

  draw(context, x, y) {
    this.live.src = "../../images/live.svg";
    context.drawImage(this.live, x, y, 15, 15);
  }

  update(realTime) {
    let min, max;
    let delta = realTime - this.pastTime;
    min = this.faultTempCounter - 0.5;
    max = this.faultTempCounter + 0.5;
    if (delta > 1000) {
      if (this.faultTempCounter % 1 !== 0) {
        this.faultCounter = this.faultCounter === min ? max : min;
      } else this.faultCounter = this.faultTempCounter;
      this.pastTime = realTime;
    }
  }

  updateWhenStop(realTime = 0) {
    let delta = realTime - this.past2Time;

    if (delta > 250) {
      this.faultCounter = this.faultCounter === 3 ? 0 : 3;
      this.past2Time = realTime;
    }
  }
}
