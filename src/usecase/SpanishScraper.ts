import puppeteer from 'puppeteer';
import { Scraper } from './Scraper';
import { Word } from '../domain/Word';
import { defaultMaxListeners } from 'stream';

export class SpanishScraper implements Scraper {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://www.lexico.com/es';
  }

  async getWordEntry(word: Word): Promise<Word> {
    if (word.name.length === 0) {
      return word;
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${this.baseUrl}/definicion/${word.name}`);

    const definitions = await page.$$('ul.semb li div.trg p span.ind');

    for (const def of definitions) {
      const singleDef = await page.evaluate(el => el.innerText, def);

      word.definitions?.push(singleDef);
    }

    word.type = '';
    word.type += await page.$eval(
      'section.gramb h3.ps span.pos',
      (element: any) => element.innerHTML.toUpperCase()
    );

    word.url = await page.url();

    await browser.close();

    return word;
  }

  async getWordListEntry(wordlist: Word[]): Promise<Word[]> {
    return wordlist;
  }
}
