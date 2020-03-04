import { Animal } from './animal.entity';

describe('Animal', () => {
  it('should be defined', () => {
    expect(new Animal()).toBeDefined();
  });
});
