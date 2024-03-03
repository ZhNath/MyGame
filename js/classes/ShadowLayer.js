import EggsBanks from "./EggsBanks.js";
import Board from "./Board.js";
import Player from "./Player.js";
import Bunny from "./Bunny.js";
import InputHandler from "./inputHandler.js";
import Num from "./Numbers.js";
import Color, { LinearGradient } from "./Color.js";
import ScoreCounter from "./ScoreCounter.js";
import FaultCounter from "./FaultCounter.js";
import Settings from "./Settings.js";
import Controller from "./Controller.js";
import Glass from "./Glass.js";
import Menu from "./Menu.js";
import Drawing from "./Drawing.js";

export default class ShadowLayer {
  constructor() {
    this.fall1_shadow = new Image();
    this.live_shadow = new Image();
    this.fall1_shadow.src = "../../images/1fall _shadow.svg";
  }
  draw(context) {
    context.drawImage(this.fall1_shadow, 220, 280, 40, 20);
    context.drawImage(this.fall1_shadow, 340, 280, 40, 20);
    for (let i = 0; i < 4; i++) {
      Num.drawShadowNum(context, 300 + 16 * i, 110, Color.screen.shadow);
    }
  }
}
