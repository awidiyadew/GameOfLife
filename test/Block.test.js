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
});
