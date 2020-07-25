import { Language } from './Language';

export class Word {
  name: string;
  definitions?: string[];
  type?: string;
  url?: string;
  language?: Language;

  constructor(
    name: string,
    definitions?: string[],
    type?: string,
    url?: string,
    language?: Language
  ) {
    this.name = name;
    this.definitions = definitions || [];
    this.type = type || '';
    this.url = url || '';
    this.language = language || Language.English;
  }
}
