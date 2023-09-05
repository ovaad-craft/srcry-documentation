import { Injectable, OnInit } from '@angular/core';
import { LineSizes } from '@site-types';

export const LINESIZES: LineSizes[] = [
  'fine', 'light', 'narrow', 'semiBold', 'bold', 'semiThick', 'thick', 'semiWide', 'wide', 'ultraWide', 'jumbo'
];

@Injectable({
  providedIn: 'root'
})
export class LineAnalyzerSelectorService implements OnInit {

  Sizes!: LineSizes[];

  constructor() { }

  ngOnInit(): void {
      this.Sizes = LINESIZES;
  }

  public getSizes(): LineSizes[]{ return this.Sizes; }
}
