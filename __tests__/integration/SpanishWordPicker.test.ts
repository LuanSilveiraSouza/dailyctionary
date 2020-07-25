import { SpanishWordPicker } from '../../src/usecase/SpanishWordPicker';

describe('SpanishWordPicker test', () => {
  test('It should create a wordpicker with 3 words', () => {
    const wordPicker = new SpanishWordPicker(3);

    expect(wordPicker.wordQtd).toBe(3);
    expect(wordPicker.repository.getAllWords).toHaveLength(0);
  });

  test('It should create a wordpicker, scrap words from a website and get the repository', () => {
    const wordPicker = new SpanishWordPicker(3);
    expect(wordPicker.wordQtd).toBe(3);
    expect(wordPicker.repository.getAllWords).toHaveLength(0);

    wordPicker.scrapRandomWords();

    console.log(wordPicker.repository.getAllWords);
  })
});
