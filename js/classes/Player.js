export default class Player {
  constructor(game) {
    this.game = game;
    this.position = 1;
    this.positions = [
      [245, 215],
      [245, 275],
      [360, 215],
      [360, 275],
    ];
  }
  setPosition(position) {
    this.position = position;
  }

  update() {}

  draw(context) {
    let [x, y] = this.positions[this.position - 1];
    context.beginPath();
    context.fillStyle = "green";
    context.arc(x, y, 15, 0, Math.PI);
    context.fill();
  }
}
