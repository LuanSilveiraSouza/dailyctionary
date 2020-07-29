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

  test('It should create a scraper, inform a word that does not have dictionary entry and pick the nearest result', async () => {
    const scraper = new SpanishScraper();

    return scraper
      .getWordEntry(SpanishWord.create('abarañar'))
      .then((word) => {
        expect(word.name).toBe('arañar');
        expect(word.type).toBe('TRANSITIVE VERB');
        expect(word.definitions).toEqual(
          expect.arrayContaining([
            'Herir superficialmente la piel con las uñas o con un objeto punzante.',
            'Rayar superficialmente una superficie dura y lisa al rozarla o frotarla con algo.'
          ])
        );
        expect(word.url).toBe('https://www.lexico.com/es/definicion/aranar');
      });
  }, 30000);
});
