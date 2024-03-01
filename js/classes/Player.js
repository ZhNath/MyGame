export default class Player {
  constructor(game) {
    this.position = 1;
    this.game = game;
    this.positions = [
      [228, 185],
      [228, 185],
      [160, 185],
      [160, 185],
    ];

    this.player = [
      (this.playerLT = new Image()),
      (this.playerLB = new Image()),
      (this.playerRT = new Image()),
      (this.playerRB = new Image()),
    ];
  }

  setPosition(position) {
    this.position = position;
  }

  update() {}

  draw(context) {
    this.playerLT.src = "../../images/WolfLT.png";
    this.playerLB.src = "../../images/WolfLB.png";
    this.playerRT.src = "../../images/WolfRT.png";
    this.playerRB.src = "../../images/WolfRB.png";

    let x = this.positions[this.position - 1][0];
    let y = this.positions[this.position - 1][1];

    context.drawImage(this.player[this.position - 1], x, y, 204, 110);
  }
}
