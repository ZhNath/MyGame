import Game from "./classes/Game.js";
import Board from "./classes/Board.js";
// import Board from "./classes/Settings.js";
// import Player from "./classes/Player.js";

const game = new Game();

window.onload = () => {
  game.start();
};
