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
});
