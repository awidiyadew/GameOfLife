import Block from '../src/Block';
import { expect } from 'chai';

describe('Block', () => {
  describe('#equals', () => {
    it('true if input are Block(0, 0) and Block(0,0)', () => {
      const block = new Block(0, 0);
      const otherBlock = new Block(0, 0);
      expect(block.equals(otherBlock)).to.be.true;
    });

    it('false if input are Block(0, 0) and Block(1, 1)', () => {
      const block = new Block(0, 0);
      const otherBlock = new Block(1, 1);
      expect(block.equals(otherBlock)).to.be.false;
    });

    it('false if input are Block(0, 0) and undefined', () => {
      const block = new Block(0, 0);
      expect(block.equals(undefined)).to.be.false;
    });
  });

  describe('#leftBlock', () => {
    it('return Block(1, 1) if input is Block(1,2)', () => {
      const block = new Block(1, 2);
      const expectedBlock = new Block(1, 1);
      const actualBlock = block.leftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(0, 0) if input is Block(0, 1)', () => {
      const block = new Block(0, 1);
      const expectedBlock = new Block(0, 0);
      const actualBlock = block.leftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#rightBlock', () => {
    it('return Block(1, 2) if input is Block(1, 1)', () => {
      const block = new Block(1, 1);
      const expectedBlock = new Block(1, 2);
      const actualBlock = block.rightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(0, 1) if input is Block(0, 0)', () => {
      const block = new Block(0, 0);
      const expectedBlock = new Block(0, 1);
      const actualBlock = block.rightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#topBlock', () => {
    it('return Block(0, 0) if input is Block(1, 0)', () => {
      const block = new Block(1, 0);
      const expectedBlock = new Block(0, 0);
      const actualBlock = block.topBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(1, 1) if input is Block(2, 1)', () => {
      const block = new Block(2, 1);
      const expectedBlock = new Block(1, 1);
      const actualBlock = block.topBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#bottomBlock', () => {
    it('return Block(1, 0) if input is Block(0, 0)', () => {
      const block = new Block(0, 0);
      const expectedBlock = new Block(1, 0);
      const actualBlock = block.bottomBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(1, 1) if input is Block(0, 1)', () => {
      const block = new Block(0, 1);
      const expectedBlock = new Block(1, 1);
      const actualBlock = block.bottomBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#topLeftBlock', () => {
    it('return Block(2, 2) if input is Block(3, 3)', () => {
      const block = new Block(3, 3);
      const expectedBlock = new Block(2, 2);
      const actualBlock = block.topLeftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(1, 1) if input is Block(2, 2)', () => {
      const block = new Block(2, 2);
      const expectedBlock = new Block(1, 1);
      const actualBlock = block.topLeftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#topRightBlock', () => {
    it('return Block(2, 1) if input is Block(3, 0)', () => {
      const block = new Block(3, 0);
      const expectedBlock = new Block(2, 1);
      const actualBlock = block.topRightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(0, 1) if input is Block(1, 0)', () => {
      const block = new Block(1, 0);
      const expectedBlock = new Block(0, 1);
      const actualBlock = block.topRightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#bottomRightBlock', () => {
    it('return Block(1, 1) if input is Block(0, 0)', () => {
      const block = new Block(0, 0);
      const expectedBlock = new Block(1, 1);
      const actualBlock = block.bottomRightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(3, 3) if input is Block(2, 2)', () => {
      const block = new Block(2, 2);
      const expectedBlock = new Block(3, 3);
      const actualBlock = block.bottomRightBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });

  describe('#bottomLeftBlock', () => {
    it('return Block(3, 0) if input is Block(2, 1)', () => {
      const block = new Block(2, 1);
      const expectedBlock = new Block(3, 0);
      const actualBlock = block.bottomLeftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });

    it('return Block(1, 0) if input is Block(0, 1)', () => {
      const block = new Block(0, 1);
      const expectedBlock = new Block(1, 0);
      const actualBlock = block.bottomLeftBlock();
      expect(actualBlock.equals(expectedBlock)).to.be.true;
    });
  });
});
