import Drawing, { Bank, Haus } from "./Drawing.js";

import Settings from "./Settings.js";

import Color from "./Color.js";

export default class Glass {
  constructor(game) {
    this.game = game;
    this.settings = new Drawing();
    this.width = Settings.canvas.width;
    this.height = Settings.canvas.height;

    this.chicken = [new Image(), new Image(), new Image(), new Image()];

    this.chicken[0].src = "../../images/chicken1.svg";
    this.chicken[2].src = "../../images/chicken3.svg";
    this.chicken[3].src = "../../images/chicken4.svg";
    this.chicken[1].src = "../../images/chicken2.svg";

    this.grass = new Image();
    this.grass.src = "../../images/Grass.png";
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

    context.drawImage(this.chicken[0], 158, 140, 30, 30);
    context.drawImage(this.chicken[2], 158, 200, 30, 30);
    context.drawImage(this.chicken[3], 410, 135, 35, 35);
    context.drawImage(this.chicken[1], 415, 200, 30, 30);

    // context.drawImage(this.grass, 160, 283, 280, 20);

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
  }
}
