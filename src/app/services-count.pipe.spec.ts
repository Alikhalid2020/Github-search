import { ServicesCountPipe } from './services-count.pipe';

describe('ServicesCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ServicesCountPipe();
    expect(pipe).toBeTruthy();
  });
});
