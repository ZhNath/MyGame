import Board from "./Board.js";
import Player from "./Player.js";
// import InputHandler from "./inputHandler.js";

export default class Game {
  canvas;
  ctx;
  wolf = new Player(this);
  board = new Board(this);

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Board.canvas.width;
    this.canvas.height = Board.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.board.draw(this.ctx);
    this.wolf.draw(this.ctx);
  }

  update() {
    this.wolf.update();
  }
}
// function animate() {
//   ctx.clearRect(0, 0, canvas.with, canvas.height);
//   Game.draw();
//   Game.update();
//   requestAnimationFrame(animate);
// }
// animate();
