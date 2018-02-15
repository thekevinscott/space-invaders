import "../node_modules/less/dist/less.min.js";
import Board from "./Board.js";
import Game from "./Game.js";
new Board(document.body);
new Game(document.body, { difficulty: "easy" });
