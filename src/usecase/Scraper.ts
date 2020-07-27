import { Word } from '../domain/Word';

export interface Scraper {
  readonly baseUrl: string;

  getWordEntry(word: Word): Promise<Word>;
  getWordListEntry(wordlist: Word[]): Promise<Word[]>;
}
