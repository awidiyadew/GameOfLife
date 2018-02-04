/**
 * Represent a living things in a universe
 */
export default class Cell {
  constructor(block, isAlive = true) {
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

  _findNeighborBlock() {
    return [
      this._block.topLeftBlock(),
      this._block.topBlock(),
      this._block.topRightBlock(),
      this._block.rightBlock(),
      this._block.bottomRightBlock(),
      this._block.bottomBlock(),
      this._block.bottomLeftBlock(),
      this._block.leftBlock()
    ];
  }

  findMyNeighbors(someUniverseCells) {
    const someUniverseBlocks = someUniverseCells.map((cell) => cell._block);
    const neighborBlocks = this._findNeighborBlock();

    let myNeighbors = [];
    neighborBlocks.forEach((neighborBlock) => {
      let isNeighborDead = true;
      someUniverseBlocks.forEach((liveBlock, index) => {
        const isNeighbor = liveBlock.equals(neighborBlock);
        if (isNeighbor) {
          isNeighborDead = false;
          myNeighbors.push(someUniverseCells[index]);
        }
      });

      if (isNeighborDead) {
        const deadNeighbor = new Cell(neighborBlock, false);
        myNeighbors.push(deadNeighbor);
      }
    });

    return myNeighbors;
  }
}
