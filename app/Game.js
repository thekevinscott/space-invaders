import {
  create,
} from "./utils.js";

import Enemy from "./Enemy.js";
import Player from "./Player.js";
import EnemyRack from "./EnemyRack.js";

const ENEMY_HEIGHT = 30;
const ENEMY_WIDTH = 30;
const START_TIME = 10000;
const PADDING = ENEMY_WIDTH;
const BOARD_SIZE = (ENEMY_WIDTH + PADDING) * (10 + 5);

class Game {
  constructor(target, { difficulty }) {
    this.enemyRack = this.createEnemies(target, difficulty);
    this.createPlayer(target);
    this.setMessage(target, "Prepare to face your enemy", { blink: true });

    setTimeout(() => {
      this.setMessage(target, "BEGIN!", { last: 1000 });
      this.enemyRack.start();
    }, START_TIME);
  }

  createPlayer(target) {
    target.appendChild(new Player(BOARD_SIZE));
  }

  createEnemies(target, difficulty) {
    const ROWS = difficulty === "easy" ? 3 : 6;
    const COLS = 10;
    // const PADDING = difficulty === "easy" ? ENEMY_WIDTH : ENEMY_WIDTH * 2;

    const rack = new EnemyRack(ROWS, COLS, ENEMY_WIDTH, ENEMY_HEIGHT, PADDING);
    target.appendChild(rack.div);
    return rack;
  }

  setMessage(target, message, { blink, last }) {
    if (!this.message) {
      this.message = create("p");
      target.appendChild(this.message);
    }

    this.message.innerHTML = message;
    this.message.className = `message ${blink ? "blink" : ""}`;
    if (last) {
      setTimeout(() => {
        this.message.innerHTML = "";
      }, last);
    }
  }
}

export default Game;
