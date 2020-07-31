import { WordRepository } from '../../repository/WordRepository';
import { Language } from '../../domain/Language';

export interface WordPicker {
  language: Language

  getRandomWords(wordQtd: Number): WordRepository;
}
