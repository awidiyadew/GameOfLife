import Cell from '../src/Cell';
import Block from '../src/Block';
import { expect } from 'chai';

describe('Cell', () => {
  describe('#isAlive', () => {
    it('true if a cell instantiated with alive true', () => {
      const cell = new Cell({}, true);
      expect(cell.isAlive()).to.be.true;
    });

    it('false if a cell instantiated with alive false', () => {
      const cell = new Cell({}, false);
      expect(cell.isAlive()).to.be.false;
    });
  });

  describe('#equals', () => {
    it('true if input are Cell({0, 0}, true) and Cell({0, 0}, true)', () => {
      const blockCell = new Block(0, 0);
      const cell = new Cell(blockCell, true);
      const otherBlockCell = new Block(0, 0);
      const otherCell = new Cell(otherBlockCell, true);
      expect(cell.equals(otherCell)).to.be.true;
    });

    it('false if input are Cell({0, 0}, true) and Cell({1, 1}, true)', () => {
      const blockCell = new Block(0, 0);
      const cell = new Cell(blockCell, true);
      const otherBlockCell = new Block(1, 1);
      const otherCell = new Cell(otherBlockCell, true);
      expect(cell.equals(otherCell)).to.be.false;
    });

    it('false if input are Cell({0, 0}, false) and Cell({0, 0}, true)', () => {
      const blockCell = new Block(0, 0);
      const cell = new Cell(blockCell, false);
      const otherBlockCell = new Block(0, 0);
      const otherCell = new Cell(otherBlockCell, true);
      expect(cell.equals(otherCell)).to.be.false;
    });

    it('false if input are Cell({0, 0}, false) and undefined', () => {
      const blockCell = new Block(0, 0);
      const cell = new Cell(blockCell, false);
      expect(cell.equals(undefined)).to.be.false;
    });

    it('false if input are Cell({0, 0}, false) and string something', () => {
      const blockCell = new Block(0, 0);
      const cell = new Cell(blockCell, false);
      expect(cell.equals('something')).to.be.false;
    });
  });

  describe('#findMyNeighbors', () => {
    it('should not contain Cell{3, 3} if input is Cell{1, 1}', () => {
      const cell11 = new Cell(new Block(1, 1));
      const aCellInBoard = new Cell(new Block(0, 0));
      const actualNeighbors = cell11.findMyNeighbors([aCellInBoard]);
      const notANeighbor = new Cell(new Block(3, 3));
      expect(actualNeighbors).to.deep.not.contains.members([notANeighbor]);
    });

    it('should contain Cell{0, 0} if target cell is Cell{1, 1} and input with some random Cell', () => {
      const targetCell = new Cell(new Block(1, 1));
      const aNeighbor = new Cell(new Block(0, 0));
      const aCellInBoard = new Cell(new Block(0, 0));
      const actualCellNeighbors = targetCell.findMyNeighbors([aCellInBoard]);
      expect(actualCellNeighbors).to.deep.contains.members([aNeighbor]);
    });
  });
});
