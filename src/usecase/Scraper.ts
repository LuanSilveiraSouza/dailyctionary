import { Word } from "../domain/Word";

export interface Scraper {
  getWordEntry(word: Word): Word;
  getWordListEntry(wordlist: Word[]): Word[];
}