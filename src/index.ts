const puppeteer = require('puppeteer');

console.log('WebScraping!!!');

const makePdf = async (url: string) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'print.png' });
  await browser.close();
};

makePdf('https://www.google.com.br/');
