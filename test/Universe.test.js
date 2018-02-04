import Universe from '../src/Universe';
import Block from '../src/Block';
import Cell from '../src/Cell';
import {expect} from 'chai';

describe('Universe', () => {
  describe('#addCell', () => {
    it('should has 0 cell if no cell added', () => {
      const universe = new Universe();
      const actualAliveCells = universe.getAliveCell();
      expect(actualAliveCells.length).to.eq(0);
    });

    it('should has 1 cell if 1 cell added', () => {
      const universe = new Universe();
      const cell00 = new Cell(new Block(0, 0));
      universe.addCell(cell00);
      const actualAliveCells = universe.getAliveCell();
      expect(actualAliveCells.length).to.eq(1);
    });
  });
});
