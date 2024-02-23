import Game from "./classes/Game.js";
// import Board from "./classes/Settings.js";
// import Player from "./classes/Player.js";

const game = new Game();

window.onload = () => {
  game.start();
};

// function animate() {
//   ctx.clearRect(0, 0, canvas.with, canvas.height);
//   Game.draw();
//   Game.update();
//   requestAnimationFrame(animate);
// }
// animate();
