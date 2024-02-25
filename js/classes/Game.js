import EggsGroup from "./EggsGroup.js";
import Egg from "./Egg.js";
import Board from "./Board.js";
import Player from "./Player.js";
import InputHandler from "./inputHandler.js";
import Color from "./Color.js";

export default class Game {
  canvas;
  ctx;
  counter = 0;
  wolf = new Player(this);
  board = new Board(this);
  eggBanks = [
    new EggsGroup(177, 153.9, 1),
    new EggsGroup(177, 215, 1),
    new EggsGroup(423, 153.9, -1),
    new EggsGroup(423, 215, -1),
  ];
  inputHandler = new InputHandler(this);

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Board.canvas.width;
    this.canvas.height = Board.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.inputHandler.addEventListener();
    this.animate();
  }

  update(timeStamp) {
    this.wolf.update();
    this.eggBanks.forEach((eggBank) => {
      eggBank.update(timeStamp);
    });
  }

  draw() {
    this.board.draw(this.ctx);
    for (const eggBank of this.eggBanks) {
      eggBank.drawBank(this.ctx);
    }
    this.wolf.draw(this.ctx);
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
  }

  animate(timeStamp) {
    this.update(timeStamp);
    this.draw();
    requestAnimationFrame((timeStamp) => this.animate(timeStamp));
  }
}
