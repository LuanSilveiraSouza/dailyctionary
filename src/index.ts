import puppeteer from 'puppeteer';
import { SpanishWord } from './domain/SpanishWord';
import { SpanishScraper } from './usecase/SpanishScraper';

console.log('WebScraping!!!');

const scrap = async (): Promise<void> => {
  const scraper = new SpanishScraper();
  const word = await scraper.getWordEntry(SpanishWord.create('ampolleta'));

  console.log(word);
}

scrap();

const makePdf = async (url: string) => {  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.type('input#query', 'hola');
  await page.click('button');

  const result = await page.$eval(
    'section.gramb ul li div p span.ind',
    (el: any) => el.innerHTML
  );

  console.log(result);

  await browser.close(); 
};
