import EggsGroup from "./EggsGroup.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Bunny from "./Bunny.js";
import InputHandler from "./inputHandler.js";

export default class Game {
  canvas;
  ctx;
  counter = 0;
  wolf = new Player(this);
  bunny = new Bunny();
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
    this.eggBanks[0].update(timeStamp);
    this.bunny.update(timeStamp);
  }

  draw() {
    this.board.draw(this.ctx);

    for (let i = 0; i < 4; i++) {
      this.eggBanks[i].drawBank(this.ctx, i);
    }

    this.wolf.draw(this.ctx);
    this.bunny.draw(this.ctx);
    EggsGroup.draw(this.ctx); //fault counter
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
    EggsGroup.setWolfPoz(buttonNumber);
  }

  animate(timeStamp) {
    this.update(timeStamp);
    this.draw();
    requestAnimationFrame((timeStamp) => this.animate(timeStamp));
  }
}
