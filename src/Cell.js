/**
 * Represent a living things in a universe
 */
export default class Cell {
  constructor(block, isAlive) {
    this._block = block;
    this._isAlive = isAlive;
  }

  isAlive() {
    return this._isAlive;
  }

  equals(otherCell) {
    if (!otherCell) {
      return false;
    }

    if (this._isDifferentType(otherCell)) {
      return false;
    }

    if (!this._block.equals(otherCell._block)) {
      return false;
    }

    return this._isAlive === otherCell._isAlive;
  }

  _isDifferentType(otherCell) {
    const someBlock = otherCell._block;
    return (!someBlock || otherCell._isAlive === undefined || otherCell._isAlive === null);
  }
}
