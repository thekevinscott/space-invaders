import {
  create,
} from "./utils.js";

const MINIMUM_STARS = 50;
const MAXIMUM_STARS = 100;
const MINIMUM_STAR_SIZE = 1;
const MAXIMUM_STAR_SIZE = 3;
const MINIMUM_STAR_FADE = 2;
const MAXIMUM_STAR_FADE = 6;
const MINIMUM_STAR_BRIGHTNESS = 0.3;
const MAXIMUM_STAR_BRIGHTNESS = 0.5;

const getRand = (min, max, roundingFn = Math.round) => min + roundingFn(Math.random() * (max - min));

class Board {
  constructor(target) {
    this.board = create({
      className: "board",
    });
    for (let i = 0; i < getRand(MINIMUM_STARS, MAXIMUM_STARS, Math.floor); i++) {
      this.board.appendChild(this.getStar());
    }
    target.appendChild(this.board);
  }

  getStar() {
    const size = `${getRand(MINIMUM_STAR_SIZE, MAXIMUM_STAR_SIZE, Math.ceil)}px`;
    const left = Math.random()*100;
    const top = Math.random()*100;
    const opacity = getRand(MINIMUM_STAR_BRIGHTNESS, MAXIMUM_STAR_BRIGHTNESS);
    const fadeLength = getRand(MINIMUM_STAR_FADE, MAXIMUM_STAR_FADE);

    return create({
      className: "star",
      style: `
        background: rgba(255, 255, 255, ${opacity});
        left: ${left}%;
        top: ${top}%;
        height: ${size};
        width: ${size};
        animation: fade ${fadeLength}s infinite;
      `,
    });
  }
}

export default Board;
