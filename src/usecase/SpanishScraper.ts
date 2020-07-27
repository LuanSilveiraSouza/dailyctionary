import puppeteer from 'puppeteer';
import { Scraper } from './Scraper';
import { Word } from '../domain/Word';

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
    
    word.url = await page.url();

    await browser.close();

    return word;
  }

  async getWordListEntry(wordlist: Word[]): Promise<Word[]> {
    return wordlist;
  }
}
