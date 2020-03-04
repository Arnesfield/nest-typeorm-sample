import { Dog } from './dog.entity';

describe('Dog', () => {
  it('should be defined', () => {
    expect(new Dog()).toBeDefined();
  });
});
