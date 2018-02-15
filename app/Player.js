import {
  create,
} from "./utils.js";

const SPEED = 2;

class Player {
  constructor(BOARD_SIZE) {
    this.player = create({
      className: "player",
      style: `
        margin: 0;
      `,
    });
    this.position = 0;
    this.timer = null;

    this.attachKeyboardListeners();
    this.boardSize = BOARD_SIZE;
    return this.player;
  }

  attachKeyboardListeners() {
    document.addEventListener("keydown", (e) => {
      // e.preventDefault();
      if (e.key === "ArrowLeft" || e.key === "h") {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.move(-1);
        }, 1);
      } else if (e.key === "ArrowRight" || e.key === "l") {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.move(1);
        }, 1);
      }
    });

    document.addEventListener("keyup", () => {
      clearInterval(this.timer);
    });
  }

  move(direction) {
    if (
      (direction < 0 && this.position > -(this.boardSize / 2)) ||
      (direction > 0 && this.position < (this.boardSize / 2))
    ) {
      this.position += direction * SPEED;
      this.player.style = `
      margin-left: ${this.position}px;
    `;
    }
  }
}

export default Player;
