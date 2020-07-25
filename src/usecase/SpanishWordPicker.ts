import { WordPicker } from './WordPicker';
import { WordRepository } from '../repository/WordRepository';
import { Language } from '../domain/Language';

export class SpanishWordPicker implements WordPicker {
  repository: WordRepository;
  wordQtd: Number;

  constructor(wordQtd: Number) {
    this.repository = new WordRepository(Language.Spanish);
    this.wordQtd = wordQtd;
  }

  scrapRandomWords(): boolean {
    return true;
  }
}
