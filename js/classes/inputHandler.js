export default class InputHandler {
  constructor(game) {
    this.game = game;
    this.keyBoardKeys = ["r", "f", "u", "j"];
  }

  setCanvasSize(canvas) {
    this.canvas = canvas;
  }

  addEventListener() {
    this.game.setGameKeys(this.keyBoardKeys);

    window.addEventListener("keydown", (keyEvent) => {
      switch (keyEvent.key) {
        case this.keyBoardKeys[0]:
          this.game.onInputEvent(1);
          break;

        case this.keyBoardKeys[1]:
          this.game.onInputEvent(2);

          break;
        case this.keyBoardKeys[2]:
          this.game.onInputEvent(3);

          break;
        case this.keyBoardKeys[3]:
          this.game.onInputEvent(4);

          break;
      }
    });

    const rect = this.canvas.getBoundingClientRect();
    console.log(rect);

    const reactToMousePress = (event) => {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      if (
        mouseX >= this.canvas.width - 70 &&
        mouseX <= this.canvas.width - 50 &&
        mouseY >= 60 &&
        mouseY <= 75
      ) {
        this.game.onMouseEvent(1);
      } else if (
        mouseX >= this.canvas.width - 70 &&
        mouseX <= this.canvas.width - 50 &&
        mouseY >= 90 &&
        mouseY <= 105
      ) {
        this.game.onMouseEvent(2);
      } else if (
        mouseX >= this.canvas.width - 70 &&
        mouseX <= this.canvas.width - 50 &&
        mouseY >= 120 &&
        mouseY <= 135
      ) {
        this.game.onMouseEvent(3);
        // menu red buttons
      } else if (
        mouseX >= 270 &&
        mouseX <= 280 &&
        mouseY >= 140 &&
        mouseY <= 160
      ) {
        console.log("mouse1");
      } else if (
        mouseX >= 270 &&
        mouseX <= 280 &&
        mouseY >= 180 &&
        mouseY <= 200
      ) {
        console.log("mouse2");
      } else if (
        mouseX >= 270 &&
        mouseX <= 280 &&
        mouseY >= 220 &&
        mouseY <= 240
      ) {
        console.log("mouse3");
      } else if (
        mouseX >= 270 &&
        mouseX <= 280 &&
        mouseY >= 260 &&
        mouseY <= 280
      ) {
        console.log("mouse4");
      }
    };
    window.addEventListener("click", reactToMousePress.bind(this));
  }
}
