import Settings from "./Settings.js";

export default class InputHandler {
  constructor(game) {
    this.game = game;
  }

  setCanvasSize(canvas) {
    this.canvas = canvas;
  }

  menuRedButtonPress(num, y1, y2, mouseX, mouseY) {
    if (mouseX >= 270 && mouseX <= 280 && mouseY >= y1 && mouseY <= y2) {
      this.game.onMouseEvent(num + 3);
    }
  }

  grayButtonPress(num, y1, y2, mouseX, mouseY) {
    if (
      mouseX >= this.canvas.width - 70 &&
      mouseX <= this.canvas.width - 50 &&
      mouseY >= y1 &&
      mouseY <= y2
    ) {
      this.game.onMouseEvent(num);
    }
  }

  addEventListener() {
    console.log(Settings.keyBoardKeys[0]);
    window.addEventListener("keydown", (keyEvent) => {
      switch (keyEvent.key) {
        case Settings.keyBoardKeys[0]:
          this.game.onInputEvent(1);
          break;
        case Settings.keyBoardKeys[1]:
          this.game.onInputEvent(2);
          break;
        case Settings.keyBoardKeys[2]:
          this.game.onInputEvent(3);
          break;
        case Settings.keyBoardKeys[3]:
          this.game.onInputEvent(4);
          break;
      }
    });

    const rect = this.canvas.getBoundingClientRect();

    const reactToMousePress = (event) => {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      this.grayButtonPress(1, 60, 75, mouseX, mouseY);
      this.grayButtonPress(2, 90, 105, mouseX, mouseY);
      this.grayButtonPress(3, 120, 135, mouseX, mouseY);

      this.menuRedButtonPress(1, 140, 160, mouseX, mouseY);
      this.menuRedButtonPress(2, 180, 200, mouseX, mouseY);
      this.menuRedButtonPress(3, 220, 240, mouseX, mouseY);
      this.menuRedButtonPress(4, 260, 280, mouseX, mouseY);
    };

    window.addEventListener("click", reactToMousePress.bind(this));
  }
}
