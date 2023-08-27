import { Injectable, OnInit } from '@angular/core';
import { BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from '@site-types';
import { BehaviorSubject, Observable } from 'rxjs';

export const BOXSIZESIZES: BoxSizeSize[] = [
  'micro', 'xTiny', 'tiny', 'xSmall', 'small', 'loMed', 'hiMed', 'large', 'jumbo'
]
export const BOXSIZESCALE: BoxSizeScale[] = ['1', '2']
export const BOXSIZESPEED: BoxSizeSpeed[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

@Injectable({
  providedIn: 'root'
})
export class BoxSizeSelectorService implements OnInit {

  BoxSizeSizes : BoxSizeSize[] = BOXSIZESIZES;
  BoxSizeScales : BoxSizeScale[] = BOXSIZESCALE;
  BoxSizeSpeeds : BoxSizeSpeed[] = BOXSIZESPEED;

  constructor() { }

  ngOnInit(): void {
  }

  public getSizes(): BoxSizeSize[]{ return this.BoxSizeSizes; }

  public getScales(): BoxSizeScale[]{ return this.BoxSizeScales; }

  public getSpeeds(): BoxSizeSpeed[]{ return this.BoxSizeSpeeds; }
}
