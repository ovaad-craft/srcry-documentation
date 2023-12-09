import { Injectable } from '@angular/core';
import { LineSizes } from '@site-types';

export const LINESIZES: LineSizes[] = [
  'fine', 'light', 'narrow', 'semiBold', 'bold', 'semiThick', 'thick', 'semiWide', 'wide', 'ultraWide', 'jumbo'
];

@Injectable({
  providedIn: 'root'
})
export class LineAnalyzerSelectorService {

  Sizes : LineSizes[] = LINESIZES;

  public getSizes() : LineSizes[]{ return this.Sizes; }
}
