import Settings, {
  RedButton,
  Triangle,
  GreyButton,
  Bank,
  Haus,
} from "./Settings.js";
import Color, { LinearGradient } from "./Color.js";

export default class Board {
  constructor(game) {
    this.game = game;
    this.settings = new Settings();
  }
  static canvas = {
    width: 601,
    height: 401,
  };

  update() {}

  draw(context) {
    context.fillStyle = Color.background;
    context.fillRect(0, 0, Board.canvas.width, Board.canvas.height);

    let gradientBoard = new LinearGradient(
      context,
      [0, 0],
      [Board.canvas.width, Board.canvas.height],
      [Color.box.basic, "white", Color.box.basic]
    );

    const extBorder = () => {
      this.settings.roundRect(
        context,
        [14, 14],
        [Board.canvas.width - 28, Board.canvas.height - 28],
        10,
        "white",
        false,
        8
      );

      this.settings.roundRect(
        context,
        [17, 17],
        [Board.canvas.width - 34, Board.canvas.height - 34],
        10,
        "black",
        false,
        2
      );

      this.settings.roundRect(
        context,
        [19, 19],
        [Board.canvas.width - 38, Board.canvas.height - 38],
        10,
        gradientBoard.drawGradient(),
        true
      );
    };
    extBorder();

    const bevelBoarder = () => {
      this.settings.triangleBoard(
        context,
        [105, 50],
        [Board.canvas.width - 105, 50],
        Color.box.light1
      );

      this.settings.triangleBoard(
        context,
        [Board.canvas.width - 105, 50],
        [Board.canvas.width - 105, Board.canvas.height - 50],
        Color.box.light2
      );

      this.settings.triangleBoard(
        context,
        [Board.canvas.width - 105, Board.canvas.height - 50],
        [105, Board.canvas.height - 50],
        Color.box.dark
      );

      this.settings.triangleBoard(
        context,
        [105, Board.canvas.height - 50],
        [105, 50],
        Color.box.light2
      );
    };
    bevelBoarder();

    const intBorder = () => {
      this.settings.roundRect(
        context,
        [125, 65],
        [Board.canvas.width - 250, Board.canvas.height - 130],
        3,
        gradientBoard.drawGradient(),
        true
      );

      this.settings.roundRect(
        context,
        [135, 75],
        [Board.canvas.width - 270, Board.canvas.height - 150],
        20,
        "black",
        false,
        2
      );

      // screen
      let gradientScreen = new LinearGradient(
        context,
        [154, 94],
        [Board.canvas.width - 308, Board.canvas.height - 188],
        [Color.screen.light, Color.screen.middle, Color.screen.dark]
      );

      this.settings.roundRect(
        context,
        [154, 94],
        [Board.canvas.width - 308, Board.canvas.height - 188],
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

      this.settings.roundRect(
        context,
        [155, 95],
        [Board.canvas.width - 310, Board.canvas.height - 190],
        3,
        "black",
        false,
        4
      );

      this.settings.roundRect(
        context,
        [150, 90],
        [Board.canvas.width - 300, Board.canvas.height - 180],
        10,
        "lightgray",
        false,
        5
      );

      this.settings.roundRect(
        context,
        [151, 91],
        [Board.canvas.width - 302, Board.canvas.height - 182],
        10,
        "white",
        false,
        4
      );
    };
    intBorder();

    const buttons = () => {
      let buttonUL = new RedButton(70, 320, 10);
      let buttonLL = new RedButton(70, 220, 10);
      let buttonUR = new RedButton(Board.canvas.width - 70, 320, 10);
      let buttonLR = new RedButton(Board.canvas.width - 70, 220, 10);

      buttonUL.draw(context);
      buttonLL.draw(context);
      buttonUR.draw(context);
      buttonLR.draw(context);

      let triangleUL = new Triangle(context, 25, 210);
      triangleUL.rotation(-Math.PI / 4);
      triangleUL.draw();

      let triangleLL = new Triangle(context, 25, 390);
      triangleLL.rotation((Math.PI * 5) / 4);
      triangleLL.draw();

      let triangleUR = new Triangle(context, Board.canvas.width - 35, 210);
      triangleUR.rotation(Math.PI / 4);
      triangleUR.draw();

      let triangleLR = new Triangle(context, Board.canvas.width - 35, 390);
      triangleLR.rotation((-Math.PI * 5) / 4);
      triangleLR.draw();
      context.restore();
    };
    buttons();

    const greyButtons = () => {
      let buttonGray1 = new GreyButton(context, Board.canvas.width - 70, 60);
      let buttonGray2 = new GreyButton(context, Board.canvas.width - 70, 90);
      let buttonGray3 = new GreyButton(context, Board.canvas.width - 70, 120);

      buttonGray1.draw();
      buttonGray2.draw();
      buttonGray3.draw();
    };
    greyButtons();

    const banks = (color, offset) => {
      let bankUL = new Bank(context, 160, 170 + offset, true, color);
      let bankLL = new Bank(context, 160, 230 + offset, true, color);
      bankUL.draw();
      bankLL.draw();
      let bankUR = new Bank(
        context,
        Board.canvas.width - 160,
        170 + offset,
        false,
        color
      );
      let bankLR = new Bank(
        context,
        Board.canvas.width - 160,
        230 + offset,
        false,
        color
      );
      bankUR.draw();
      bankLR.draw();
    };
    banks(Color.shadow, 4);
    banks(Color.bank, 0);

    const haus = (color, offset) => {
      let hs = new Haus(context, 160, 130 + offset, color);
      hs.draw();
    };
    haus([Color.shadow, Color.shadow], 4);
    haus(Color.house, 0);
  }
}
