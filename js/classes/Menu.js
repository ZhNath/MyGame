import Drawing from "./Drawing.js";
import { RedButton } from "./Drawing.js";
import { Triangle } from "./Drawing.js";

export default class Menu {
  rect = new Drawing();
  buttons = [
    new RedButton(275, 150, 5),
    new RedButton(275, 190, 5),
    new RedButton(275, 230, 5),
    new RedButton(275, 270, 5),
  ];

  //   triangles = [new Triangle(this.context, 260, 150)];

  draw(context) {
    this.rect.roundRect(context, [235, 100], [130, 200], 5, "red", false, 2);
    this.buttons.forEach((button) => {
      button.draw(context);
    });
  }

  //   drawTr() {
  //     this.triangles.forEach((triangle) => {
  //       triangle.draw();
  //     });
  //   }
}
