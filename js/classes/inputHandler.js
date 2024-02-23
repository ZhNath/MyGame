export default class InputHandler {
  constructor(game) {
    this.game = game;
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
  }
}
