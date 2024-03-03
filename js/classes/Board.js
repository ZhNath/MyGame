import Drawing, { RedButton, Triangle, GreyButton } from "./Drawing.js";

import Settings from "./Settings.js";

import Color, { LinearGradient } from "./Color.js";

export default class Board {
  constructor(game) {
    this.game = game;
    this.gameboard = new Drawing();
    this.width = Settings.canvas.width;
    this.height = Settings.canvas.height;
  }

  update() {}

  draw(context) {
    context.fillStyle = Color.background;
    context.fillRect(0, 0, this.width, this.height);

    let gradientBoard = new LinearGradient(
      context,
      [0, 0],
      [this.width, this.height],
      [Color.box.basic, "white", Color.box.basic]
    );

    const extBorder = () => {
      this.gameboard.roundRect(
        context,
        [14, 14],
        [this.width - 28, this.height - 28],
        10,
        "white",
        false,
        8
      );

      this.gameboard.roundRect(
        context,
        [17, 17],
        [this.width - 34, this.height - 34],
        10,
        "black",
        false,
        3
      );

      this.gameboard.roundRect(
        context,
        [19, 19],
        [this.width - 38, this.height - 38],
        10,
        gradientBoard.drawGradient(),
        true
      );
    };
    extBorder();

    const bevelBoarder = () => {
      this.gameboard.triangleBoard(
        context,
        [105, 50],
        [this.width - 105, 50],
        Color.box.light1
      );

      this.gameboard.triangleBoard(
        context,
        [this.width - 105, 50],
        [this.width - 105, this.height - 50],
        Color.box.light2
      );

      this.gameboard.triangleBoard(
        context,
        [this.width - 105, this.height - 50],
        [105, this.height - 50],
        Color.box.dark
      );

      this.gameboard.triangleBoard(
        context,
        [105, this.height - 50],
        [105, 50],
        Color.box.light2
      );
    };
    bevelBoarder();

    const intBorder = () => {
      this.gameboard.roundRect(
        context,
        [125, 65],
        [this.width - 250, this.height - 130],
        3,
        gradientBoard.drawGradient(),
        true
      );

      this.gameboard.roundRect(
        context,
        [135, 75],
        [this.width - 270, this.height - 150],
        20,
        "black",
        false,
        2
      );

      // screen
      let gradientScreen = new LinearGradient(
        context,
        [154, 94],
        [this.width - 308, this.height - 188],
        [Color.screen.light, Color.screen.middle, Color.screen.dark]
      );

      this.gameboard.roundRect(
        context,
        [154, 94],
        [this.width - 308, this.height - 188],
        10,
        gradientScreen.drawGradient(),
        true
      );

      context.filter = "blur(2px)";
      context.strokeStyle = Color.button.dark;
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(155, 98);
      context.lineTo(450, 98);
      context.stroke();
      context.filter = "none";

      this.gameboard.roundRect(
        context,
        [155, 95],
        [this.width - 310, this.height - 190],
        3,
        "black",
        false,
        4
      );

      this.gameboard.roundRect(
        context,
        [150, 90],
        [this.width - 300, this.height - 180],
        10,
        "lightgray",
        false,
        5
      );

      this.gameboard.roundRect(
        context,
        [151, 91],
        [this.width - 302, this.height - 182],
        10,
        "white",
        false,
        4
      );
    };
    intBorder();

    const buttons = () => {
      let buttons = [
        new RedButton(70, 320, 10),
        new RedButton(70, 220, 10),
        new RedButton(this.width - 70, 320, 10),
        new RedButton(this.width - 70, 220, 10),
      ];

      buttons.forEach((button) => {
        button.draw(context);
      });

      let triangles = [
        new Triangle(25, 210, 1),
        new Triangle(this.width - 35, 210, 1),
        new Triangle(this.width - 35, 390, 1),
        new Triangle(25, 390, 1),
      ];
      for (let i = 0; i < 4; i++) {
        context.save();
        triangles[i].rotation(context, -Math.PI / 4 + (i * Math.PI) / 2);
        triangles[i].draw(context);
        context.restore();
      }
    };
    buttons();

    const greyButtons = () => {
      let buttonGray1 = new GreyButton(context, this.width - 70, 60);
      let buttonGray2 = new GreyButton(context, this.width - 70, 90);
      let buttonGray3 = new GreyButton(context, this.width - 70, 120);

      buttonGray1.draw();
      buttonGray2.draw();
      buttonGray3.draw();

      context.font = "10px Arial";
      context.fillStyle = "black";
      context.fillText("Game A", this.width - 75, 85);
      context.fillText("Game B", this.width - 75, 115);
      context.fillText("Menu", this.width - 68, 145);
    };

    greyButtons();
  }
}
