import { SpanishWord } from '../../src/domain/SpanishWord';
import { SpanishScraper } from '../../src/usecase/SpanishScraper';

describe('Spanish scraper tests', () => {
  test('It should create a scraper and validate a getWordEntry call', () => {
    const scraper = new SpanishScraper();

    const word = scraper.getWordEntry(SpanishWord.create('ampolleta'));

    expect(word.name).toBe('ampolleta');
  })
})