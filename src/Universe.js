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
    return new Universe();
  }
}
