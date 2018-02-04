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

    this._cells.push(cell);
  }

  getAliveCell() {
    return this._cells;
  }
}
