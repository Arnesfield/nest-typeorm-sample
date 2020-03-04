import { Cat } from './cat.entity';

describe('Cat', () => {
  it('should be defined', () => {
    expect(new Cat()).toBeDefined();
  });
});
