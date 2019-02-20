import { Common } from './segment.common';
export declare class Segment extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here

  static init(apiKey: string): void;
  static track(): void;
}
