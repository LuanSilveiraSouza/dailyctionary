import { Language } from '../../src/domain/Language';
import { SpanishWord } from '../../src/domain/SpanishWord';
import { WordRepository } from '../../src/repository/WordRepository';
import { Word } from '../../src/domain/Word';

describe('Word Repository tests', () => {
  test('It should create a empty repository', () => {
    const wordRepo = new WordRepository(Language.Spanish);

    expect(wordRepo.getAllWords).toHaveLength(0);
  });

  test('It should create a repository, add some words and get them back', () => {
    const wordRepo = new WordRepository(Language.Spanish);

    const wordRojo = SpanishWord.create('rojo');
    const wordPantalla = SpanishWord.create('pantalla');

    wordRepo.addWord(wordRojo);
    wordRepo.addWord(wordPantalla);

    expect(wordRepo.getWord(wordRojo.name)).toMatchObject(wordRojo);
    expect(wordRepo.getAllWords()).toHaveLength(2);
    expect(wordRepo.getAllWords()).toEqual(
      expect.arrayContaining([wordRojo, wordPantalla])
    );
  });

  test('It should create a repository that accepts words in same language and rejects words in different languages', () => {
    const wordRepo = new WordRepository(Language.Spanish);

    const wordRojo = SpanishWord.create('rojo');
    const wordChair = new Word('chair');

    expect(wordRepo.addWord(wordRojo)).toBe(true);
    expect(wordRepo.addWord(wordChair)).toBe(false);
    expect(wordRepo.getAllWords()).toHaveLength(1);
    expect(wordRepo.getAllWords()).toEqual(
      expect.arrayContaining([wordRojo])
    );
  })
});
