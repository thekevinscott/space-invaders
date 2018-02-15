import {
  create,
} from "./utils.js";

import Enemy from "./Enemy";

class EnemyRack {
  constructor(rows, cols, enemyWidth, enemyHeight, padding) {
    this.width = cols * (enemyWidth + padding);
    this.div = create({
      className: "rack",
      style: `
        height: ${rows * (enemyHeight + padding)}px;
        width: ${this.width}px;
        margin-left: -${this.width / 2}px;
      `,
    });

    this.createEnemies(rows, cols, enemyWidth, enemyHeight, padding);

    this.position = 0;
    this.round = 0;
    this.step = enemyWidth;
    this.moveTime = 250;
    this.direction = "right";
    // console.log(enemyWidth, padding);
  }

  start() {
    this.move();
  }

  move() {
    if (this.direction === "right" && this.position > 4) {
      this.direction = "left";
      this.nextRound();
    } else if (this.direction === "left" && this.position < -4) {
      this.direction = "right";
      this.nextRound();
    } else {
      this.position = this.position + (this.direction === "right" ? 1 : -1);
    }

    const marginLeft = (-this.width / 2) + (this.position*this.step);
    this.div.style = `
      margin-left: ${marginLeft}px;
      margin-top: ${this.round * this.step}px;
    `;

    setTimeout(() => {
      this.move();
    }, this.moveTime);
  }

  nextRound() {
    this.round = this.round + 1;
    if (this.moveTime > 250) {
      this.moveTime = this.moveTime * .8;
    }
  }

  createEnemies(rows, cols, width, height, padding) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const enemy = new Enemy({
          row: i,
          col: j,
          height,
          width,
          padding,
        });
        this.div.appendChild(enemy);
      }
    }

  }
}

export default EnemyRack;
