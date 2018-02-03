import Cell from '../src/Cell';
import { expect } from 'chai';

describe('Cell', () => {
  describe('#isAlive', () => {
    it('true if a cell instantiated with true constructor', () => {
      const cell = new Cell(true);
      expect(cell.isAlive()).to.be.true;
    });

    it('false if a cell instantiated with false constructor', () => {
      const cell = new Cell(false);
      expect(cell.isAlive()).to.be.false;
    });
  });
});
