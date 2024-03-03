import Drawing from "./Drawing.js";
import { RedButton } from "./Drawing.js";
import { Triangle } from "./Drawing.js";

export default class Menu {
  rect = new Drawing();
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

  setKeys(keys) {
    this.keys = [
      { key: keys[0], y: 155 },
      { key: keys[1], y: 195 },
      { key: keys[2], y: 235 },
      { key: keys[3], y: 275 },
    ];
  }

  draw(context) {
    this.buttons.forEach((button) => {
      button.draw(context);
    });

    context.font = "18px Arial";
    context.fillStyle = "black";
    this.keys.forEach((key) => {
      context.fillText(`- ${key.key}`, 300, key.y);
    });

    context.font = "10px Arial";
    context.fillText("Click on the corresponding button", 230, 110);
    context.fillText("to assign new keys", 270, 125);

    for (let i = 0; i < 4; i++) {
      context.save();
      this.triangles[i].rotation(context, -Math.PI / 4 + (i * Math.PI) / 2);
      this.triangles[i].draw(context);
      context.restore();
    }
  }
  clear(context) {
    context.fillStyle = Color.background;
    context.fillRect(235, 100, 130, 200);
  }
}
