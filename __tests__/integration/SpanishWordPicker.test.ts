import { SpanishWordPicker } from '../../src/usecase/wordpicker/SpanishWordPicker';
import { Language } from '../../src/domain/Language';

describe('SpanishWordPicker tests', () => {
  test('It should create a wordpicker with spanish language', () => {
    const wordPicker = new SpanishWordPicker();

    expect(wordPicker.language).toBe(Language.Spanish);
  });

  test('It should create a wordpicker and get the repository filled with 3 words of a list', () => {
    const wordPicker = new SpanishWordPicker();

    expect(wordPicker.getRandomWords(3).getAllWords()).toHaveLength(3);
  });

  test('It should create a wordpicker and get random words from a list', () => {
    const wordPicker = new SpanishWordPicker();
    
    const RandomRepo = wordPicker.getRandomWords(3);

    expect(RandomRepo.getAllWords()).toHaveLength(3);
    
    RandomRepo.getAllWords().forEach((word) => {
      expect(word.name).not.toHaveLength(0);
    });
  });
});
