import Cell from './Cell';

/**
 * Represent a place where Cells life
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

    if (this._isCellExist(cell)) {
      return;
    }

    this._cells.push(cell);
  }

  _isCellExist(cell) {
    const duplicateItems = this._cells.filter(item => item.equals(cell));
    return duplicateItems.length > 0;
  }

  getAliveCell() {
    return this._cells;
  }

  tick() {
    const nextUniverse = new Universe();
    this._cells.forEach(cell => {
      const cellNeighbors = cell.findMyNeighbors(this._cells);
      const aliveNeighbors = cellNeighbors.filter(cell => cell.isAlive());
      const deadNeighbors = cellNeighbors.filter(cell => !cell.isAlive());

      if (aliveNeighbors.length === 2 || aliveNeighbors.length === 3) {
        nextUniverse.addCell(cell);
      }

      deadNeighbors.forEach(deadCell => {
        const deadCellNeighbors = deadCell.findMyNeighbors(this._cells);
        const otherAliveNeighbors = deadCellNeighbors.filter(cell => cell.isAlive());

        if (otherAliveNeighbors.length === 3) {
          const rebornCell = deadCell.reborn();
          nextUniverse.addCell(rebornCell);
        }
      });
    });

    return nextUniverse;
  }
}
