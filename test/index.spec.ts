import { sum } from '../src/index.js';

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
