import { SpanishWord } from '../../src/domain/SpanishWord';
import { SpanishScraper } from '../../src/usecase/SpanishScraper';

describe('Spanish scraper tests', () => {
  test('It should create a scraper and validate a getWordEntry call', async () => {
    const scraper = new SpanishScraper();

    return scraper
      .getWordEntry(SpanishWord.create('ampolleta'))
      .then((word) => {
        expect(word.name).toBe('ampolleta');
        expect(word.url).toBe('https://www.lexico.com/es/definicion/ampolleta');
      });

    //expect(word.url).toBe('https://www.lexico.com/es/definicion/ampolleta');
  }, 15000);
});
