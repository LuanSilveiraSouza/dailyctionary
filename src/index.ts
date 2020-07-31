import { SpanishScraper } from './usecase/SpanishScraper';
import { SpanishWordPicker } from './usecase/wordpicker/SpanishWordPicker';

console.log('WebScraping!!!');

const scrap = async (): Promise<void> => {
  const SpanishPicker = new SpanishWordPicker();
  const scraper = new SpanishScraper();

  const repo = SpanishPicker.getRandomWords(3);

  repo.getAllWords().forEach(async (word) => {
    word = await scraper.getWordEntry(word);

    console.log(word);
  });

};

scrap();
