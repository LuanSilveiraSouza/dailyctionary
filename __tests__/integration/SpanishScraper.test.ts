import { SpanishWord } from '../../src/domain/SpanishWord';
import { SpanishScraper } from '../../src/usecase/SpanishScraper';

describe('Spanish scraper tests', () => {
  test('It should create a scraper and validate a getWordEntry call', async () => {
    const scraper = new SpanishScraper();

    return scraper
      .getWordEntry(SpanishWord.create('ampolleta'))
      .then((word) => {
        expect(word.name).toBe('ampolleta');
        expect(word.type).toBe('FEMININE NOUN');
        expect(word.definitions).toEqual(
          expect.arrayContaining([
            'Reloj de arena, especialmente el usado por los marinos.',
            'Ampolla de cristal en cuyo interior, en el que se ha hecho el vacío, hay un filamento que produce luz por incandescencia al paso de una corriente eléctrica.',
            'Ampolla (recipiente pequeño de cristal)',
          ])
        );
        expect(word.url).toBe('https://www.lexico.com/es/definicion/ampolleta');
      });
  }, 15000);
});
