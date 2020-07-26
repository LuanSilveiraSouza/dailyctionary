import { SpanishWordPicker } from '../../src/usecase/SpanishWordPicker';

describe('SpanishWordPicker test', () => {
  test('It should create a wordpicker with 3 words', () => {
    const wordPicker = new SpanishWordPicker(3);

    expect(wordPicker.wordQtd).toBe(3);
    expect(wordPicker.repository.getAllWords()).toHaveLength(0);
  });

  test('It should create a wordpicker and get the repository filled with n words of a list', () => {
    const wordPicker = new SpanishWordPicker(3);
    expect(wordPicker.wordQtd).toBe(3);
    expect(wordPicker.repository.getAllWords()).toHaveLength(0);

    expect(wordPicker.getRandomWords().getAllWords()).toHaveLength(3);
  });

  test('It should create a wordpicker and get random words from a list', () => {
    const wordPicker = new SpanishWordPicker(3);

    expect(wordPicker.getRandomWords().getAllWords()).toHaveLength(3);
    wordPicker.repository.getAllWords().forEach((word) => {
      expect(word.name).not.toHaveLength(0);
    });
  });
});
