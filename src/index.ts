import puppeteer from 'puppeteer';

console.log('WebScraping!!!');

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

makePdf('https://www.lexico.com/es');
