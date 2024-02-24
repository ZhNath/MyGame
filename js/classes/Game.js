import EggsGroup from "./EggsGroup.js";
import Board from "./Board.js";
import Player from "./Player.js";
import InputHandler from "./inputHandler.js";

export default class Game {
  canvas;
  ctx;
  wolf = new Player(this);
  board = new Board(this);
  eggBankUL = new EggsGroup(177, 153.9, 1);
  eggBankLL = new EggsGroup(177, 215, 1);
  eggBankUR = new EggsGroup(423, 153.9, -1);
  eggBankLR = new EggsGroup(423, 215, -1);

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
    this.eggBankUL.draw(this.ctx);
    this.eggBankLL.draw(this.ctx);
    this.eggBankUR.draw(this.ctx);
    this.eggBankLR.draw(this.ctx);
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
