import {
  create,
} from "./utils.js";

const TYPES = [
  "alerion",
  "crawler",
  "flamer",
  "flyer",
  "prog",
  "zarin",
];

const getEnemyType = () => {
  return TYPES[Math.floor(Math.random()*TYPES.length)];
};

class Enemy {
  constructor({row, col, height, width, padding}) {
  const animate = 1 + Math.round((Math.random() * 4));
    return create({
      className: `enemy ${getEnemyType()}`,
      style: `
        left: ${col*(width + padding)}px;
        top: ${row*(height + padding)}px;
        width: ${width}px;
        height: ${height}px;
        animation-duration: ${animate}s;
      `,
    });
  }
}

export default Enemy;
