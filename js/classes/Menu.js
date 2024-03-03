import { RedButton, Triangle } from "./Drawing.js";
import Settings from "./Settings.js";

export default class Menu {
  buttons = [
    new RedButton(275, 150, 3),
    new RedButton(275, 190, 3),
    new RedButton(275, 230, 3),
    new RedButton(275, 270, 3),
  ];

  triangles = [
    new Triangle(250, 145, 0.5),
    new Triangle(295, 225, 0.5),
    new Triangle(295, 305, 0.5),
    new Triangle(250, 225, 0.5),
  ];

  keyBoardKeys = [
    { key: Settings.keyBoardKeys[0], y: 155 },
    { key: Settings.keyBoardKeys[1], y: 195 },
    { key: Settings.keyBoardKeys[2], y: 235 },
    { key: Settings.keyBoardKeys[3], y: 275 },
  ];

  input = [
    document.getElementById("input1"),
    document.getElementById("input2"),
    document.getElementById("input3"),
    document.getElementById("input4"),
  ];

  init(canvas) {
    this.canvas = canvas;
    this.input.forEach((input) => {
      input.style.display = "none"; // menu input invisible
    });
  }

  draw(context) {
    this.buttons.forEach((button) => {
      button.draw(context);
    });

    for (let i = 0; i < 4; i++) {
      context.save();
      this.triangles[i].rotation(context, -Math.PI / 4 + (i * Math.PI) / 2);
      this.triangles[i].draw(context);
      context.restore();
    }

    context.font = "18px Arial";
    context.fillStyle = "black";
    this.keyBoardKeys.forEach((key) => {
      context.fillText(`- ${key.key}`, 300, key.y);
    });

    context.font = "10px Arial";
    context.fillText("Click on the corresponding button", 230, 110);
    context.fillText("to assign new keys", 270, 125);
  }

  inputs(num) {
    const canvasRect = this.canvas.getBoundingClientRect();
    const inputX = canvasRect.left + 300;
    const inputY = canvasRect.top + this.keyBoardKeys[num].y - 17;
    let input = this.input[num];
    input.style.left = inputX + "px";
    input.style.top = inputY + "px";
    input.placeholder = this.keyBoardKeys[num].key;
    input.style.display = "block";

    input.addEventListener("input", () => {
      this.keyBoardKeys[num].key = input.value;
      Settings.keyBoardKeys[num] = input.value;
    });
  }
}
