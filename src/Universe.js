import Cell from './Cell';

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

    if (Cell._isDifferentType(cell)) {
      return;
    }

    this._cells.push(cell);
  }

  getAliveCell() {
    return this._cells;
  }
}
