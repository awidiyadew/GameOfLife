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

    it('add Cell{0, 0}, should return Cell{0, 0} with the data index', () => {
      const universe = new Universe();
      const block00 = new Block(0, 0);
      const inputCell00 = new Cell(block00);
      universe.addCell(inputCell00);

      const aliveCellInUniverse = universe.getAliveCell();
      const cellIndex = aliveCellInUniverse.length - 1;
      const actualCellInUniverse = aliveCellInUniverse[cellIndex];
      expect(actualCellInUniverse.equals(inputCell00)).to.be.true;
    });

    it('should not addCell if input is undefined', () => {
      const universe = new Universe();
      universe.addCell(undefined);
      const cellInUniverse = universe.getAliveCell();
      expect(cellInUniverse.length).to.eq(0);
    });

    it('should not addCell if input is string', () => {
      const universe = new Universe();
      universe.addCell('something');
      const cellInUniverse = universe.getAliveCell();
      expect(cellInUniverse.length).to.eq(0);
    });

    it('should not addCell if input is not valid Cell', () => {
      const universe = new Universe();
      const badBlock = new Block('bad', 'oh no!');
      const badCell = new Cell(badBlock);
      universe.addCell(badCell);
      const cellInUniverse = universe.getAliveCell();
      expect(cellInUniverse.length).to.eq(0);
    });

    it('should not addCell if cell already exist', () => {
      const cell = new Cell(new Block(0, 0));
      const aDuplicateCell = new Cell(new Block(0, 0));
      const otherDuplicateCell = new Cell(new Block(0, 0));
      const universe = new Universe();
      universe.addCell(cell);
      universe.addCell(aDuplicateCell);
      universe.addCell(otherDuplicateCell);
      const cellInUniverse = universe.getAliveCell();
      expect(cellInUniverse.length).to.eq(1);
    });
  });

  describe('#tick', () => {
    it('return same universe when no cell in universe', () => {
      const universe = new Universe();
      const nextUniverse = universe.tick();
      expect(universe).to.deep.include(nextUniverse);
    });

    it('return different next universe when Cell{0, 0} added to current universe', () => {
      const universe = new Universe();
      const cell00 = new Cell(new Block(0, 0));
      universe.addCell(cell00);
      const nextUniverse = universe.tick();
      expect(universe.getAliveCell()).not.to.deep.members(nextUniverse.getAliveCell());
    });

    it('return 0 alive cell in next universe when Cell{0, 0} added to current universe', () => {
      const universe = new Universe();
      const cell00 = new Cell(new Block(0, 0));
      universe.addCell(cell00);
      const nextUniverse = universe.tick();
      expect(nextUniverse.getAliveCell().length).to.eq(0);
    });

    it('return Block Patter next universe with Cell(1,1|1,2|2,1|2,2) if input are Cell(1,1|1,2|2,1|2,2)', () => {
      const universe = new Universe();
      const cell11 = new Cell(new Block(1, 1));
      const cell12 = new Cell(new Block(1, 2));
      const cell21 = new Cell(new Block(2, 1));
      const cell22 = new Cell(new Block(2, 2));
      universe.addCell(cell11);
      universe.addCell(cell12);
      universe.addCell(cell21);
      universe.addCell(cell22);
      const prevUniverseCells = universe.getAliveCell();

      const nextUniverse = universe.tick();
      const nextUniverseCells = nextUniverse.getAliveCell();
      expect(nextUniverseCells).to.deep.members(prevUniverseCells);
    });

    it('return Boat Pattern next universe with Cell(0,1|1,0|2,1|0,2|1,2) if input are Cell(0,1|1,0|2,1|0,2|1,2)', () => {
      const universe = new Universe();
      const cell01 = new Cell(new Block(0, 1));
      const cell10 = new Cell(new Block(1, 0));
      const cell21 = new Cell(new Block(2, 1));
      const cell02 = new Cell(new Block(0, 2));
      const cell12 = new Cell(new Block(1, 2));
      universe.addCell(cell01);
      universe.addCell(cell10);
      universe.addCell(cell21);
      universe.addCell(cell02);
      universe.addCell(cell12);
      const prevUniverseCells = universe.getAliveCell();

      const nextUniverse = universe.tick();
      const nextUniverseCells = nextUniverse.getAliveCell();
      expect(nextUniverseCells).to.deep.members(prevUniverseCells);
    });

    it('return BlinkerPattern-Oscillator next universe with Cell(1,1|0,1|2,1) if input are Cell(1,1|1,0|1,2)', () => {
      const universe = new Universe();
      const cell11 = new Cell(new Block(1, 1));
      const cell10 = new Cell(new Block(1, 0));
      const cell12 = new Cell(new Block(1, 2));
      universe.addCell(cell11);
      universe.addCell(cell10);
      universe.addCell(cell12);

      const expectedCellsResult = [
        new Cell(new Block(1, 1)),
        new Cell(new Block(0, 1)),
        new Cell(new Block(2, 1))
      ];
      const nextUniverse = universe.tick();
      const actualNextUniverseCells = nextUniverse.getAliveCell();
      expect(actualNextUniverseCells).to.deep.members(expectedCellsResult);
    });

    it('return ToadPattern-Two-Phase-Oscillator next universe with Cell(0,2|1,1|1,4|2,1|2,4|3,3) if input are Cell(1,1|1,2|1,3|2,2|2,3|2,4)', () => {
      const universe = new Universe();
      const cell11 = new Cell(new Block(1, 1));
      const cell12 = new Cell(new Block(1, 2));
      const cell13 = new Cell(new Block(1, 3));
      const cell22 = new Cell(new Block(2, 2));
      const cell23 = new Cell(new Block(2, 3));
      const cell24 = new Cell(new Block(2, 4));
      universe.addCell(cell11);
      universe.addCell(cell12);
      universe.addCell(cell13);
      universe.addCell(cell22);
      universe.addCell(cell23);
      universe.addCell(cell24);

      const expectedCellsResult = [
        new Cell(new Block(0, 2)),
        new Cell(new Block(1, 1)),
        new Cell(new Block(1, 4)),
        new Cell(new Block(2, 1)),
        new Cell(new Block(2, 4)),
        new Cell(new Block(3, 3))
      ];
      const nextUniverse = universe.tick();
      const actualNextUniverseCells = nextUniverse.getAliveCell();
      expect(actualNextUniverseCells).to.deep.members(expectedCellsResult);
    });
  });
});
