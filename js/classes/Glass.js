import Drawing, { Bank, Haus } from "./Drawing.js";

import Settings from "./Settings.js";

import Color from "./Color.js";

export default class Glass {
  constructor(game) {
    this.game = game;
    this.settings = new Drawing();
    this.width = Settings.canvas.width;
    this.height = Settings.canvas.height;
    this.chicken1 = new Image();
    this.chicken2 = new Image();
    this.chicken3 = new Image();
    this.chicken4 = new Image();
    this.grass = new Image();
  }
  draw(context) {
    context.shadowColor = "rgba(0, 0, 0, 0.5)";
    context.shadowBlur = 2;
    context.shadowOffsetY = 3;

    const banks = (color) => {
      let bankUL = new Bank(context, 160, 170, true, color);
      let bankLL = new Bank(context, 160, 230, true, color);
      bankUL.draw();
      bankLL.draw();
      let bankUR = new Bank(context, this.width - 160, 170, false, color);
      let bankLR = new Bank(context, this.width - 160, 230, false, color);
      bankUR.draw();
      bankLR.draw();
    };
    banks(Color.bank);

    const haus = (color) => {
      let hs = new Haus(context, 160, 130, color);
      hs.draw();
    };
    haus(Color.house);

    this.chicken1.src = "../../images/chicken1.svg";
    context.drawImage(this.chicken1, 158, 140, 30, 30);

    this.chicken3.src = "../../images/chicken3.svg";
    context.drawImage(this.chicken3, 158, 200, 30, 30);

    this.chicken4.src = "../../images/chicken4.svg";
    context.drawImage(this.chicken4, 415, 140, 30, 30);

    this.chicken2.src = "../../images/chicken2.svg";
    context.drawImage(this.chicken2, 415, 200, 30, 30);

    this.grass.src = "../../images/Grass.png";
    context.drawImage(this.grass, 160, 283, 280, 20);

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
  }
}
