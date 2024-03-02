export default class InputHandler {
  constructor(game) {
    this.game = game;
  }

  setCanvasSize(canvas) {
    this.canvas = canvas;
    console.log(this.canvas.width);
    console.log(this.canvas.height);
  }

  addEventListener() {
    const UL = "r";
    const LL = "f";
    const UR = "u";
    const LR = "j";

    window.addEventListener("keydown", (keyEvent) => {
      switch (keyEvent.key) {
        case UL:
          this.game.onInputEvent(1);
          break;

        case LL:
          this.game.onInputEvent(2);

          break;
        case UR:
          this.game.onInputEvent(3);

          break;
        case LR:
          this.game.onInputEvent(4);

          break;
      }
    });

    const rect = this.canvas.getBoundingClientRect();
    console.log(rect);

    const reactToMousePress = (event) => {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      // console.log(mouseX, mouseY);
      if (
        mouseX >= this.canvas.width - 70 &&
        mouseX <= this.canvas.width - 50 &&
        mouseY >= 60 &&
        mouseY <= 75
      ) {
        this.game.onMouseEvent(1);
      } else {
        console.log("game is already");
      }
    };
    window.addEventListener("click", reactToMousePress.bind(this));
  }
}
