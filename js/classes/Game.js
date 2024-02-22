import Color from "./Color.js";
import Board from "./Settings.js";

export default class Game {
  canvas;
  ctx;

  start() {
    this.canvas = document.getElementById("2d-canvas");
    this.canvas.width = Board.canvas.width;
    this.canvas.height = Board.canvas.height;
    this.ctx = this.canvas.getContext("2d");

    this.ctx.fillStyle = Color.background;
    this.ctx.fillRect(0, 0, Board.canvas.width, Board.canvas.height);

    this.board = new Board();
    this.board.roundRect(
      this.ctx,
      14,
      14,
      this.canvas.width - 28,
      this.canvas.height - 28,
      "white",
      false,
      8
    );

    this.board.roundRect(
      this.ctx,
      17,
      17,
      this.canvas.width - 34,
      this.canvas.height - 34,
      "black",
      false,
      2
    );
  }
}

// let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

// gradient.addColorStop(0, Color.box.basic);
// gradient.addColorStop(0.5, "white");
// gradient.addColorStop(1, Color.box.basic);

// Settings.roundRect(
//   19,
//   19,
//   canvas.width - 38,
//   canvas.height - 38,
//   gradient,
//   true
// );

// ctx.fillStyle = Color.box.light1;
// ctx.beginPath();
// ctx.moveTo(105, 50);
// ctx.lineTo(canvas.width - 105, 50);
// ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fill();

// ctx.fillStyle = Color.box.light2;
// ctx.beginPath();
// ctx.moveTo(canvas.width - 105, 50);
// ctx.lineTo(canvas.width - 105, canvas.height - 50);
// ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fill();

// ctx.fillStyle = Color.box.dark;
// ctx.beginPath();
// ctx.moveTo(canvas.width - 105, canvas.height - 50);
// ctx.lineTo(105, canvas.height - 50);
// ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fill();

// ctx.fillStyle = Color.box.light2;
// ctx.beginPath();
// ctx.moveTo(105, canvas.height - 50);
// ctx.lineTo(105, 50);
// ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fill();

// Settings.roundRect(
//   125,
//   65,
//   canvas.width - 250,
//   canvas.height - 130,
//   gradient,
//   true
// );

// Settings.roundRect(
//   135,
//   75,
//   canvas.width - 270,
//   canvas.height - 150,
//   "black",
//   false,
//   2
// );

// Settings.roundRect(
//   145,
//   85,
//   canvas.width - 290,
//   canvas.height - 170,
//   "lightgray",
//   false,
//   2
// );

// Settings.roundRect(
//   150,
//   90,
//   canvas.width - 300,
//   canvas.height - 180,
//   "black",
//   false,
//   4
// );

// settings.roundRect(
//   148,
//   88,
//   canvas.width - 296,
//   canvas.height - 176,
//   "white",
//   false,
//   4
// );

// let screenGradient = ctx.createLinearGradient(
//   154,
//   94,
//   canvas.width - 308,
//   canvas.height - 188
// );

// screenGradient.addColorStop(0, "#e0e0e0");
// screenGradient.addColorStop(1, "#cdd3cd");

// Settings.roundRect(
//   154,
//   94,
//   canvas.width - 308,
//   canvas.height - 188,
//   screenGradient,
//   true
// );

// class Button {
//   constructor(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.btngradient = ctx.createRadialGradient(
//       this.x,
//       this.y - 15,
//       5,
//       this.x,
//       this.y - 5,
//       20
//     );
//     this.btngradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
//     this.btngradient.addColorStop(1, "rgba(255, 255, 255, 0)");
//   }
//   draw() {
//     ctx.fillStyle = "#cdd3cd";
//     ctx.strokeStyle = "gray";
//     ctx.lineWidth = 1;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius + 8, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.stroke();

//     ctx.fillStyle = "gray";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y + 3, this.radius + 3, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.fillStyle = "#ce0606";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y + 1, this.radius + 1, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.fillStyle = this.btngradient;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.filter = "blur(3px)";
//     ctx.arc(this.x, this.y + 1, this.radius - 2, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.filter = "none";

//     ctx.fillStyle = this.btngradient;
//     ctx.beginPath();
//     ctx.filter = "blur(2px)";
//     ctx.arc(this.x - 5, this.y - 12, 5, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.filter = "none";
//   }
// }

// let buttonUL = new Button(70, 320, 10);
// let buttonLL = new Button(70, 220, 10);
// let buttonUR = new Button(canvas.width - 70, 320, 10);
// let buttonLR = new Button(canvas.width - 70, 220, 10);

// buttonUL.draw();
// buttonLL.draw();
// buttonUR.draw();
// buttonLR.draw();

// class Triangle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   draw() {
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     ctx.lineTo(this.x + 10, this.y);
//     ctx.lineTo(this.x + 5, this.y - 30);
//     ctx.closePath();
//     ctx.fill();
//   }

//   rotation(alfa) {
//     ctx.restore();
//     ctx.save();
//     ctx.translate(this.x + 5, this.y - 30);
//     ctx.rotate(alfa);
//     ctx.translate(-(this.x + 5), -(this.y - 30));
//   }
// }

// let triangleUL = new Triangle(25, 210);
// triangleUL.rotation(-Math.PI / 4);
// triangleUL.draw();

// let triangleLL = new Triangle(25, 390);
// triangleLL.rotation((Math.PI * 5) / 4);
// triangleLL.draw();

// let triangleUR = new Triangle(canvas.width - 35, 210);
// triangleUR.rotation(Math.PI / 4);
// triangleUR.draw();

// let triangleLR = new Triangle(canvas.width - 35, 390);
// triangleLR.rotation((-Math.PI * 5) / 4);
// triangleLR.draw();
// ctx.restore();

// class greyButton {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.btngradient = ctx.createRadialGradient(
//       this.x,
//       this.y - 15,
//       5,
//       this.x,
//       this.y - 5,
//       20
//     );
//     this.btngradient.addColorStop(0, "rgba(255, 255, 255, 1)");
//     this.btngradient.addColorStop(1, "rgba(255, 255, 255, 0)");
//   }

//   drawButton(x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x + radius, y);
//     ctx.arcTo(x + width, y, x + width, y + height, radius);
//     ctx.arcTo(x + width, y + height, x, y + height, radius);
//     ctx.arcTo(x, y + height, x, y, radius);
//     ctx.arcTo(x, y, x + width, y, radius);
//     ctx.closePath();
//     ctx.stroke();
//   }

//   draw() {
//     ctx.fillStyle = "darkgray";
//     ctx.beginPath();
//     this.drawButton(this.x + 5, this.y + 6, 19, 10, 5);
//     ctx.fill();

//     ctx.fillStyle = "#cec6c4";
//     ctx.beginPath();
//     this.drawButton(this.x + 5, this.y + 4, 19, 10, 5);
//     ctx.fill();

//     ctx.fillStyle = "#cec6c4";
//     ctx.beginPath();
//     this.drawButton(this.x + 6, this.y + 5, 17, 8, 4);
//     ctx.fill();

//     ctx.fillStyle = this.btngradient;
//     ctx.beginPath();
//     this.drawButton(this.x + 6, this.y + 5, 17, 8, 4);
//     ctx.fill();

//     //     ctx.fillStyle = "red";
//     //     ctx.beginPath();
//     //     ctx.filter = "blur(3px)";
//     //     ctx.arc(this.x, this.y + 1, this.radius - 2, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.filter = "none";

//     //     ctx.fillStyle = this.btngradient;
//     //     ctx.beginPath();
//     //     ctx.filter = "blur(2px)";
//     //     ctx.arc(this.x - 5, this.y - 12, 5, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.filter = "none";
//   }
// }

// let buttonGray1 = new greyButton(canvas.width - 70, 60);
// let buttonGray2 = new greyButton(canvas.width - 70, 90);
// let buttonGray3 = new greyButton(canvas.width - 70, 120);

// buttonGray1.draw();
// buttonGray2.draw();
// buttonGray3.draw();
