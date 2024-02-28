import EggsBanks from "./EggsBanks.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Bunny from "./Bunny.js";
import InputHandler from "./inputHandler.js";
import Num from "./Numbers.js";
import Color from "./Color.js";
import ScoreCounter from "./ScoreCounter.js";
import FaultCounter from "./FaultCounter.js";
import Settings from "./Settings.js";
import Controller from "./Controller.js";

export default class Game {
  canvas;
  ctx;
  wolf = new Player(this);
  bunny = new Bunny();
  board = new Board(this);
  eggBank = [
    new EggsBanks(177, 153.9, 1),
    new EggsBanks(177, 215, 1),
    new EggsBanks(423, 153.9, -1),
    new EggsBanks(423, 215, -1),
  ];
  inputHandler = new InputHandler(this);
  blinked = new FaultCounter(this.ctx, 250, 160);
  controller = new Controller();

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Settings.canvas.width;
    this.canvas.height = Settings.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.inputHandler.addEventListener();
    this.animate();
  }

  update(timeStamp) {
    Controller.update(timeStamp);
    EggsBanks.setPlayEggs(Controller.playEggs);

    this.bunny.update(timeStamp);
    Controller.setBunnyStatus(this.bunny.isBunny);

    ScoreCounter.setScoreCount(Controller.scoreCounter);

    this.blinked.setFaultCounter(Controller.faultTempCounter);

    this.blinked.update(timeStamp);
  }

  draw() {
    this.board.draw(this.ctx);

    for (let i = 0; i < 4; i++) {
      this.eggBank[i].draw(this.ctx, i);
    }

    this.wolf.draw(this.ctx);
    this.bunny.draw(this.ctx);

    for (let i = 0; i < 4; i++) {
      Num.drawShadowNum(this.ctx, 300 + 16 * i, 110, Color.screen.shadow);
    }

    ScoreCounter.draw(this.ctx, 110);

    for (let i = 0; i < 3; i++) {
      this.blinked.draw(this.ctx, 355 - 16 * i, 160, Color.screen.shadow);
    }

    for (let i = 0; i < this.blinked.faultCounter; i++) {
      if (this.blinked.faultCounter <= 3)
        this.blinked.draw(this.ctx, 355 - i * 16, 160, "black");
    }
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
    Controller.setWolfPoz(buttonNumber);
  }

  animate(timeStamp) {
    this.update(timeStamp);
    this.draw();
    requestAnimationFrame((timeStamp) => this.animate(timeStamp));
  }
}
