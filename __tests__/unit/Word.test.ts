import { Word } from '../../src/domain/Word';

describe('Word test', () => {
  test('It should create a Word with only a name', () => {
    const word = new Word('banana');

    expect(word.name).toBe('banana');
    expect(word.definitions?.length).toBe(0);
    expect(word.url).toBe('');
  })
})