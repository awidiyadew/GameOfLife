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

  describe('#isDifferentType', () => {
    it('true if cell instantiated with bad block', () => {
      const badBlock = new Block('bad', 'oh no!');
      const badCell = new Cell(badBlock);
      expect(Cell.isDifferentType(badCell)).to.be.true;
    });
  });

  describe('#findMyNeighbors', () => {
    it('should not contain Cell{3, 3} if input is Cell{1, 1}', () => {
      const cell11 = new Cell(new Block(1, 1));
      const aUniverseCell = new Cell(new Block(10, 10));
      const actualNeighbors = cell11.findMyNeighbors([aUniverseCell]);
      const notANeighbor = new Cell(new Block(3, 3));
      expect(actualNeighbors).to.deep.not.contains.members([notANeighbor]);
    });

    it('should contain Cell{0, 0} if target cell is Cell{1, 1} and input with some random Cell', () => {
      const targetCell = new Cell(new Block(1, 1));
      const aNeighbor = new Cell(new Block(0, 0));
      const aUniverseCell = new Cell(new Block(0, 0));
      const actualCellNeighbors = targetCell.findMyNeighbors([aUniverseCell]);
      expect(actualCellNeighbors).to.deep.contains.members([aNeighbor]);
    });

    it('should return all neighbor of Cell{1, 1} with isAlive = false', () => {
      const targetCell = new Cell(new Block(1, 1));
      const expectedNeighborOfCell11 = [
        new Cell(new Block(1, 0), false),
        new Cell(new Block(0, 0), false),
        new Cell(new Block(0, 1), false),
        new Cell(new Block(0, 2), false),
        new Cell(new Block(1, 2), false),
        new Cell(new Block(2, 2), false),
        new Cell(new Block(2, 1), false),
        new Cell(new Block(2, 0), false)
      ];
      const actualNeighbors = targetCell.findMyNeighbors([]);
      expect(actualNeighbors).to.deep.contains.members(expectedNeighborOfCell11);
    });
  });

  describe('#reborn', () => {
    it('return a new alive cell from a dead cell', () => {
      const deadCell = new Cell(new Block(0, 0), false);
      const expectedResult = new Cell(new Block(0, 0), true);
      const actualRebornCell = deadCell.reborn();
      expect(actualRebornCell.equals(expectedResult)).to.be.true;
    });

    it('should return error when trying to reborn an alive cell', () => {
      const aliveCell = new Cell(new Block(0, 0), true);
      const actualRebornCell = () => aliveCell.reborn();
      expect(actualRebornCell).to.be.throw();
    });
  });
});
