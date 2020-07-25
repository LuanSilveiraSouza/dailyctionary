import { Word } from "./Word";
import { Language } from "./Language";

export class SpanishWord {
  static create(name: string, definitions?: string[], type?: string, url?: string) {
    return new Word(name, definitions, type, url, Language.Spanish)
  }
}