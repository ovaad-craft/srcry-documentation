import { Injectable } from '@angular/core';
import { TextSizeSize, TextSizeSpeed } from '@site-types';

export const TEXTSIZES: TextSizeSize[] = [
  'caption', 'widget', 'article', 'subtitle', 'title', 'headline', 'jumbotron'
]

export const TEXTSPEEDS: TextSizeSpeed[] = [
  '1', '2', '3', '4', '5'
]

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerSelectorService {

  TextSizeSizes: TextSizeSize[] = TEXTSIZES;
  TextSpeeds: TextSizeSpeed[] = TEXTSPEEDS;

  public getTextSizes(): TextSizeSize[]{ return this.TextSizeSizes; }
  
  public getTextSpeeds(): TextSizeSpeed[]{ return this.TextSpeeds; }

  constructor() { }
}
