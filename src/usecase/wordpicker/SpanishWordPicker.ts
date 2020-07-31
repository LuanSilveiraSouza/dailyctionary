import words from '../../words-lists/spanish-words.json';

import { WordPicker } from './WordPicker';
import { WordRepository } from '../../repository/WordRepository';
import { Language } from '../../domain/Language';
import { SpanishWord } from '../../domain/SpanishWord';

export class SpanishWordPicker implements WordPicker {
  language: Language;

  constructor() {
    this.language = Language.Spanish;
  }

  getRandomWords(wordQtd: Number): WordRepository {
    let randomNumber;
    const repository = new WordRepository(Language.Spanish);

    for (let i = 0; i < wordQtd; i++) {
      randomNumber = Math.floor(Math.random() * words.length);

      repository.addWord(SpanishWord.create(words[randomNumber]));
    }

    return repository;
  }
}
