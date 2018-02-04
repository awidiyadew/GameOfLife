/**
 * Represent a living things in a universe
 */
export default class Cell {
  constructor(isAlive) {
    this._isAlive = isAlive;
  }

  isAlive() {
    return this._isAlive;
  }
}
