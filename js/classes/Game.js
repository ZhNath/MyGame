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
import Glass from "./Glass.js";

export default class Game {
  canvas;
  ctx;
  animationGlobal;
  wolf = new Player(this);

  bunny = new Bunny();
  board = new Board(this);
  glass = new Glass(this);

  eggBank = [
    new EggsBanks(177, 153.9, 1),
    new EggsBanks(177, 215, 1),
    new EggsBanks(423, 153.9, -1),
    new EggsBanks(423, 215, -1),
  ];

  liveEgg = new FaultCounter(this.ctx, 250, 160);

  inputHandler = new InputHandler(this);
  blinked = new FaultCounter(this.ctx, 250, 160);
  controller = new Controller();

  pastTime = 0;

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Settings.canvas.width;
    this.canvas.height = Settings.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.inputHandler.setCanvasSize(this.canvas);

    this.inputHandler.addEventListener();

    this.board.draw(this.ctx);
    this.glass.draw(this.ctx);
  }

  update(timeStamp) {
    // if (Controller.isStop) {
    //   this.blinked.updateWhenStop(timeStamp);
    // }

    Controller.update(timeStamp);

    EggsBanks.setPlayEggs(Controller.playEggs);

    this.bunny.update(timeStamp);
    Controller.setBunnyStatus(this.bunny.isBunny);

    ScoreCounter.setScoreCount(Controller.scoreCounter);

    this.liveEgg.setFaultCounter(Controller.faultTempCounter);

    this.liveEgg.update(timeStamp);
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
      this.liveEgg.draw_shadow(this.ctx, 347 - i * 16, 150);
    }

    for (let i = 0; i < this.liveEgg.faultCounter; i++) {
      if (this.liveEgg.faultCounter <= 3) {
        this.liveEgg.draw(this.ctx, 347 - i * 16, 150);
      }
    }

    this.glass.draw(this.ctx);
  }

  onInputEvent(buttonNumber) {
    this.wolf.setPosition(buttonNumber);
    Controller.setWolfPoz(buttonNumber);
  }

  onMouseEvent(eventNumber) {
    this.animate();
    if (eventNumber === 2) Controller.gameB = true;
  }

  animate(timeStamp) {
    this.update(timeStamp);
    this.draw();
    requestAnimationFrame((timeStamp) => this.animate(timeStamp));
  }
}
