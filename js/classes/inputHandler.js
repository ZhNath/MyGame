export default class InputHandler {
  constructor(game) {
    this.game = game;
  }
  addEventListener() {
    const keysPressed = [];
    window.addEventListener("keydown", (key) => {
      keysPressed.push(key);
      console.log(keysPressed);
    });
  }
}
