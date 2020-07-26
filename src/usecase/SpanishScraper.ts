import { Scraper } from "./Scraper";
import { Word } from "../domain/Word";

export class SpanishScraper implements Scraper {
  getWordEntry(word: Word): Word {
    return word;
  }

  getWordListEntry(wordlist: Word[]): Word[] {
    return wordlist;
  }
}