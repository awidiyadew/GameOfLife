import Cell from './Cell';
import Block from "./Block";

/**
 * Represent a place where Cell lives
 */
export default class Universe {
  constructor() {
    this._cells = [];
  }

  addCell(cell) {
    if (!cell) {
      return;
    }

    if (Cell.isDifferentType(cell)) {
      return;
    }

    this._cells.push(cell);
  }

  getAliveCell() {
    return this._cells;
  }
}
