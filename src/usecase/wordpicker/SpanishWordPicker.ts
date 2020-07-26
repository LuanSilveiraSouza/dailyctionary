const words = require('../../words-lists/spanish-words.json');

import { WordPicker } from './WordPicker';
import { WordRepository } from '../../repository/WordRepository';
import { Language } from '../../domain/Language';
import { SpanishWord } from '../../domain/SpanishWord';

export class SpanishWordPicker implements WordPicker {
  repository: WordRepository;
  wordQtd: Number;

  constructor(wordQtd: Number) {
    this.repository = new WordRepository(Language.Spanish);
    this.wordQtd = wordQtd;
  }

  getRandomWords(): WordRepository {
    let randomNumber;

    for (let i = 0; i < this.wordQtd; i++) {
      randomNumber = Math.floor(Math.random() * (words.length));
      
      this.repository.addWord(SpanishWord.create(words[randomNumber]))
    }

    return this.repository;
  }
}
