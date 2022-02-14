// @ts-check
/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */

import Easy from './EasyStrategy.js';
import Normal from './NormalStrategy.js';

const strategies = {
  'easy': new Easy(),
  'normal': new Normal(),
}

class TicTacToe {
  constructor(level = 'easy') {
    this.strategy = strategies[level];
    this.field = [
      Array(3).fill(null),
      Array(3).fill(null),
      Array(3).fill(null),
    ];
  }

  go(row = null, col = null) {
    if (row === null || col === null) {
      const [autoRow, autoCol] = this.strategy.getNextStep(this.field);
      this.field[autoRow][autoCol] = 'AI';
      return this.isWinner('AI');
    }

    this.field[row][col] = 'Player';
    return this.isWinner('Player');
  }

  isWinner(type) {
    if (this.field.find((row) => this.hasPlayerPlacedAllTheMarks(row, type))) {
      return true;
    }

    for (let i = 0; i < 3; i += 1) {
      if (this.hasPlayerPlacedAllTheMarks(this.field.map((el) => el[i]), type)) {
        return true;
      }
    }

    const diagonal1 = [this.field[0][0], this.field[1][1], this.field[2][2]];
    if (this.hasPlayerPlacedAllTheMarks(diagonal1, type)) {
      return true;
    }

    const diagonal2 = [this.field[2][0], this.field[1][1], this.field[0][2]];
    if (this.hasPlayerPlacedAllTheMarks(diagonal2, type)) {
      return true;
    }

    return false;
  }

  hasPlayerPlacedAllTheMarks(row, type) {
    return row.every((value) => value === type);
  }
}

export default TicTacToe;
