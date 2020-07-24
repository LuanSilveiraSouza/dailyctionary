export class Word {
  name: string
  definitions?: string[]
  url?: string

  constructor (name: string, definitions?: string[], url?: string) {
    this.name = name;
    this.definitions = definitions || [];
    this.url = url || "";
  }
}