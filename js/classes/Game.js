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
    this.animateEgg();
  }

  update() {
    this.wolf.update();
  }

  draw() {
    this.board.draw(this.ctx);
    this.wolf.draw(this.ctx);
    this.eggBankUL.drawBank(this.ctx, Color.screen.shadow);
    this.eggBankLL.drawBank(this.ctx, Color.screen.shadow);
    this.eggBankUR.drawBank(this.ctx, Color.screen.shadow);
    this.eggBankLR.drawBank(this.ctx, Color.screen.shadow);
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
  }

  animate() {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.animate());
  }

  animateEgg() {
    this.clearRect(0, 0, this.ctx.width, this.ctx.height);
    this.eggBankLL.drawEgg(this.ctx, "black", this.counter);
    this.counter++;
    alert(this.counter);
    setTimeout(() => this.animateEgg(), 100);
    // requestAnimationFrame(() => this.animateEgg());
  }
}
