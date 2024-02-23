import Color, { LinearGradient } from "./Color.js";
import Board, {
  RedButton,
  Triangle,
  GreyButton,
  Bank,
  Haus,
} from "./Settings.js";
import Player from "./Player.js";
// import InputHandler from "./inputHandler.js";

export default class Game {
  canvas;
  ctx;

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Board.canvas.width;
    this.canvas.height = Board.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.drawBoard();
    this.drawPlayer();
  }

  update() {
    this.wolf.update();
  }

  wolf = new Player(this);
  board = new Board();
  drawBoard() {
    this.ctx.fillStyle = Color.background;
    this.ctx.fillRect(0, 0, Board.canvas.width, Board.canvas.height);

    let gradientBoard = new LinearGradient(
      this.ctx,
      [0, 0],
      [this.canvas.width, this.canvas.height],
      [Color.box.basic, "white", Color.box.basic]
    );

    const extBorder = () => {
      this.board.roundRect(
        this.ctx,
        [14, 14],
        [this.canvas.width - 28, this.canvas.height - 28],
        10,
        "white",
        false,
        8
      );

      this.board.roundRect(
        this.ctx,
        [17, 17],
        [this.canvas.width - 34, this.canvas.height - 34],
        10,
        "black",
        false,
        2
      );

      this.board.roundRect(
        this.ctx,
        [19, 19],
        [this.canvas.width - 38, this.canvas.height - 38],
        10,
        gradientBoard.drawGradient(),
        true
      );
    };
    extBorder();

    const bevelBoarder = () => {
      this.board.triangleBoard(
        this.ctx,
        [105, 50],
        [this.canvas.width - 105, 50],
        Color.box.light1
      );

      this.board.triangleBoard(
        this.ctx,
        [this.canvas.width - 105, 50],
        [this.canvas.width - 105, this.canvas.height - 50],
        Color.box.light2
      );

      this.board.triangleBoard(
        this.ctx,
        [this.canvas.width - 105, this.canvas.height - 50],
        [105, this.canvas.height - 50],
        Color.box.dark
      );

      this.board.triangleBoard(
        this.ctx,
        [105, this.canvas.height - 50],
        [105, 50],
        Color.box.light2
      );
    };
    bevelBoarder();

    const intBorder = () => {
      this.board.roundRect(
        this.ctx,
        [125, 65],
        [this.canvas.width - 250, this.canvas.height - 130],
        3,
        gradientBoard.drawGradient(),
        true
      );

      this.board.roundRect(
        this.ctx,
        [135, 75],
        [this.canvas.width - 270, this.canvas.height - 150],
        20,
        "black",
        false,
        2
      );

      // screen
      let gradientScreen = new LinearGradient(
        this.ctx,
        [154, 94],
        [this.canvas.width - 308, this.canvas.height - 188],
        [Color.screen.light, Color.screen.middle, Color.screen.dark]
      );

      this.board.roundRect(
        this.ctx,
        [154, 94],
        [this.canvas.width - 308, this.canvas.height - 188],
        10,
        gradientScreen.drawGradient(),
        true
      );

      this.ctx.filter = "blur(2px)";
      this.ctx.strokeStyle = Color.button.dark;
      this.ctx.lineWidth = 5;
      this.ctx.beginPath();
      this.ctx.moveTo(155, 98);
      this.ctx.lineTo(450, 98);
      this.ctx.stroke();
      this.ctx.filter = "none";

      this.board.roundRect(
        this.ctx,
        [155, 95],
        [this.canvas.width - 310, this.canvas.height - 190],
        3,
        "black",
        false,
        4
      );

      this.board.roundRect(
        this.ctx,
        [150, 90],
        [this.canvas.width - 300, this.canvas.height - 180],
        10,
        "lightgray",
        false,
        5
      );

      this.board.roundRect(
        this.ctx,
        [151, 91],
        [this.canvas.width - 302, this.canvas.height - 182],
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
      let buttonUR = new RedButton(this.canvas.width - 70, 320, 10);
      let buttonLR = new RedButton(this.canvas.width - 70, 220, 10);

      buttonUL.draw(this.ctx);
      buttonLL.draw(this.ctx);
      buttonUR.draw(this.ctx);
      buttonLR.draw(this.ctx);

      let triangleUL = new Triangle(this.ctx, 25, 210);
      triangleUL.rotation(-Math.PI / 4);
      triangleUL.draw();

      let triangleLL = new Triangle(this.ctx, 25, 390);
      triangleLL.rotation((Math.PI * 5) / 4);
      triangleLL.draw();

      let triangleUR = new Triangle(this.ctx, this.canvas.width - 35, 210);
      triangleUR.rotation(Math.PI / 4);
      triangleUR.draw();

      let triangleLR = new Triangle(this.ctx, this.canvas.width - 35, 390);
      triangleLR.rotation((-Math.PI * 5) / 4);
      triangleLR.draw();
      this.ctx.restore();
    };
    buttons();

    const greyButtons = () => {
      let buttonGray1 = new GreyButton(this.ctx, this.canvas.width - 70, 60);
      let buttonGray2 = new GreyButton(this.ctx, this.canvas.width - 70, 90);
      let buttonGray3 = new GreyButton(this.ctx, this.canvas.width - 70, 120);

      buttonGray1.draw();
      buttonGray2.draw();
      buttonGray3.draw();
    };
    greyButtons();

    const banks = (color, offset) => {
      let bankUL = new Bank(this.ctx, 160, 170 + offset, true, color);
      let bankLL = new Bank(this.ctx, 160, 230 + offset, true, color);
      bankUL.draw();
      bankLL.draw();
      let bankUR = new Bank(
        this.ctx,
        this.canvas.width - 160,
        170 + offset,
        false,
        color
      );
      let bankLR = new Bank(
        this.ctx,
        this.canvas.width - 160,
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
      let hs = new Haus(this.ctx, 160, 130 + offset, color);
      hs.draw();
    };
    haus([Color.shadow, Color.shadow], 4);
    haus(Color.house, 0);
  }

  drawPlayer() {
    this.wolf.draw(this.ctx);
  }
}
