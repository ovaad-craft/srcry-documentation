import { Injectable, OnInit } from '@angular/core';
import { BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from '@site-types';

export const BOXSIZESIZES: BoxSizeSize[] = [
  'micro', 'xTiny', 'tiny', 'xSmall', 'small', 'loMed', 'hiMed', 'large', 'jumbo'
]
export const BOXSIZESCALE: BoxSizeScale[] = ['1', '2']
export const BOXSIZESPEED: BoxSizeSpeed[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

@Injectable({
  providedIn: 'root'
})
export class BoxSizeSelectorService implements OnInit {

  BoxSizeSizes! : BoxSizeSize[];
  BoxSizeScale! : BoxSizeScale[];
  BoxSizeSpeed! : BoxSizeSpeed[];

  constructor() { }

  ngOnInit(): void {
      this.BoxSizeSizes = BOXSIZESIZES;
      this.BoxSizeScale = BOXSIZESCALE;
      this.BoxSizeSpeed = BOXSIZESPEED;
  }
}
