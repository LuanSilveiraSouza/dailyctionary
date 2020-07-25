import { Word } from '../../src/domain/Word';
import { SpanishWord } from '../../src/domain/SpanishWord';
import { Language } from '../../src/domain/Language';

describe('Word test', () => {
  test('It should create a Word with only a name', () => {
    const word = new Word('banana');

    expect(word.name).toBe('banana');
    expect(word.definitions?.length).toBe(0);
    expect(word.type).toBe('');
    expect(word.url).toBe('');
    expect(word.language).toBe(Language.English);
  });
});

describe('Spanish Word Test', () => {
  test('It should create a spanish word', () => {
    const word = SpanishWord.create(
      'pollo',
      ['Cría de un ave, especialmente de la gallina.'],
      'MASCULINE NOUN',
      'https://www.lexico.com/es/definicion/pollo'
    );

    expect(word.name).toBe('pollo');
    expect(word.definitions?.length).toBe(1);
    expect(word.type).toBe('MASCULINE NOUN');
    expect(word.url).toBe('https://www.lexico.com/es/definicion/pollo');
    expect(word.language).toBe(Language.Spanish);
  });
});
