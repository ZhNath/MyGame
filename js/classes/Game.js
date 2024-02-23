import Board from "./Board.js";
import Player from "./Player.js";
import InputHandler from "./inputHandler.js";

export default class Game {
  canvas;
  ctx;
  wolf = new Player(this);
  wolf1 = new Player(this);
  board = new Board(this);
  inputHandler = new InputHandler(this);

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Board.canvas.width;
    this.canvas.height = Board.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.inputHandler.addEventListener();
    this.animate();
  }

  update() {
    this.wolf.update();
  }

  draw() {
    this.board.draw(this.ctx);
    this.wolf.draw(this.ctx);
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}
