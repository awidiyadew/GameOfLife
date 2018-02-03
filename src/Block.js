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

    if (this._column !== otherBlock._column) {
      return false;
    }

    return true;
}
}
