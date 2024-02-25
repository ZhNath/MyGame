import EggsGroup from "./EggsGroup.js";

export default class InputHandler {
  constructor(game) {
    this.game = game;
  }
  static counter = 0;

  catch(i) {
    if (EggsGroup.playEggs[0][1] === i && EggsGroup.playEggs[0][0] === 4) {
      EggsGroup.playEggs.shift();
      InputHandler.counter++;
    }
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
          this.catch(0);
          break;

        case LL:
          this.game.onInputEvent(2);
          this.catch(1);

          break;
        case UR:
          this.game.onInputEvent(3);
          this.catch(2);

          break;
        case LR:
          this.game.onInputEvent(4);
          this.catch(3);

          break;
      }
    });
  }

  static draw(context) {
    context.font = "24px Arial";
    context.fillStyle = "black";
    context.fillText(InputHandler.counter, 50, 50);
  }
}
