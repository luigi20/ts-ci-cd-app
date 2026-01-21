import { sum } from '../src/index';

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
