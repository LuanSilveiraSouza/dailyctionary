import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

import { SpanishScraper } from './usecase/SpanishScraper';
import { SpanishWordPicker } from './usecase/wordpicker/SpanishWordPicker';
import { Word } from './domain/Word';

const scrap = async (): Promise<Word[]> => {
  const SpanishPicker = new SpanishWordPicker();
  const scraper = new SpanishScraper();

  const repo = SpanishPicker.getRandomWords(3);

  const scrapedRepo = await Promise.all(repo.getAllWords().map(
    async (word) => await scraper.getWordEntry(word))
  );

  return scrapedRepo;
};

const sendMail = (mailOptions: {}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 2525,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Mail sent: '+ info.response);
  })
}

const main = async () => {

  const words = await scrap();

  const today = new Date(Date.now());

  let mailText = `Day ${today.getUTCDate()}/${today.getUTCMonth()}/${new Date().getUTCFullYear()}${'\n'}${'\n'}`;

  words.forEach(word => {
    mailText += `${word.name}${'\n'}${word.type}${'\n'}${word.definitions}${'\n'}${word.url}${'\n'}${'\n'}`
  });
  
  const mailOptions = {
    from: process.env.MAIL,
    to: process.env.MAIL,
    subject: 'Dailyctionary',
    text: mailText,
  }  

  sendMail(mailOptions);
}

main();
