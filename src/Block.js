/**
 * Represent an area in a grid
 */
export default class Block {
  constructor(row, column) {
    this._row = row;
    this._column = column;
  }

  equals(otherBlock) {
    if (!otherBlock) {
      return false;
    }

    if (this._row !== otherBlock._row) {
      return false;
    }

    return this._column === otherBlock._column;
  }

  leftBlock() {
    return new Block(this._row, this._column - 1);
  }

  rightBlock() {
    return new Block(this._row, this._column + 1);
  }
}
