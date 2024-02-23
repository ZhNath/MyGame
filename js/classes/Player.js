export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 360;
    this.y = 260;
  }

  update() {}

  draw(context) {
    context.beginPath();
    context.fillStyle = "green";
    context.arc(this.x, this.y, 15, 0, Math.PI);
    context.fill();
  }
}
