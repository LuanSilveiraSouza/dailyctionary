import { WordRepository } from '../repository/WordRepository';

export interface WordPicker {
  repository: WordRepository;
  wordQtd: Number;

  scrapRandomWords(): boolean;
}
