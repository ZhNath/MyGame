export default class Player {
  constructor(game) {
    this.position = 1;
    this.game = game;
    // this.positions = [
    //   [245, 215],
    //   [245, 275],
    //   [360, 215],
    //   [360, 275],
    // ];
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
    // let [x, y] = this.positions[this.position - 1];
    // context.beginPath();
    // context.fillStyle = "green";
    // context.arc(x, y, 15, 0, Math.PI);
    // context.fill();

    this.playerLT.src = "../../images/WolfLT.png";
    this.playerLB.src = "../../images/WolfLB.png";
    this.playerRT.src = "../../images/WolfRT.png";
    this.playerRB.src = "../../images/WolfRB.png";

    // context.drawImage(this.playerLT, 228, 190, 180, 100);
    // context.drawImage(this.playerLB, 228, 190, 180, 100);
    // context.drawImage(this.playerRT, 190, 190, 180, 100);
    // context.drawImage(this.playerRB, 190, 190, 180, 100);

    let x = this.positions[this.position - 1][0];
    let y = this.positions[this.position - 1][1];

    context.drawImage(this.player[this.position - 1], x, y, 204, 110);
  }
}
