import { Word } from '../domain/Word';
import { Language } from '../domain/Language';

export class WordRepository {
  private words: Word[];
  language: Language;

  constructor(language: Language) {
    this.words = [];
    this.language = language;
  }

  getAllWords(): Word[] {
    return this.words;
  }

  getWord(name: string): Word {
    return this.words.filter((word) => word.name === name)[0];
  }

  setWord(word: Word): boolean {
    let filter = this.words.filter((word) => word.name === word.name)[0];

    if (filter) {
      filter = word;
    } 
    return filter === word;
  }

  addWord(word: Word): boolean {
    if(word.language === this.language) {
      this.words.push(word);
      return true
    } else {
      return false;
    }
  }
}
