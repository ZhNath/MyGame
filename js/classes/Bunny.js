export default class Bunny {
  static isBunny = false;
  constructor() {
    this.pastTime = 0;
    this.color = "rgba(0,0,255,0)";
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(230, 130, 10, 0, Math.PI * 2);
    context.fill();
  }

  update(realTime) {
    let delta = realTime - this.pastTime;
    if (this.color == "rgba(0,0,255,0)") {
      if (delta > 3e4) {
        this.color = "rgba(0,0,255,1)";
        this.pastTime = realTime;
        Bunny.isBunny = true;
      }
    } else if (delta > 7e3) {
      this.color = "rgba(0,0,255,0)";
      this.pastTime = realTime;
      Bunny.isBunny = false;
    }
  }
}
