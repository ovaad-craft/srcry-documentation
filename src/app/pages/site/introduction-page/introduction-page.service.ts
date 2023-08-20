import { Injectable } from '@angular/core';
import { CardSummaryData } from '@site-types';
import { BehaviorSubject } from 'rxjs';


export const LIBRARYDESCRIPTIONDATA: CardSummaryData[] = [
  {
    id: 'boxSizeLibrary',
    title: 'Box Size Library',
    description: 'Contains 220 dynamic sizes for making your elements scale as subtly or drastically as you need.',
    path: 'box-size-library',
    breadCrumbs: ['libraries']
  },
  {
    id: 'textSizeLibrary',
    title: 'Text Size Library',
    description: 'Contains 35 dynamic sizes for making your text fluid while preserving visual heriarchy.',
    path: 'text-size-library',
    breadCrumbs: ['libraries']
  },
  {
    id: 'lineSizeLibrary',
    title: 'Line Size Library',
    description: 'Contains 11 dynamic sizes for making adaptable strokes, outlines and borders on your HTML and SVG elements.',
    path: 'line-size-library',
    breadCrumbs: ['libraries']
  },
]

export const CLASSDESCRIPTIONDATA: CardSummaryData[] = [
  {
    id: 'srcryBoxClass',
    title: 'srcryBox Class',
    description: 'Contains 46 new CSS properties that give you full control over the responsive functionality of your elements.',
    path: 'srcry-box-overview',
    breadCrumbs: ['classes', 'srcryBox']
  },
  {
    id: 'srcryTxtClass',
    title: 'srcryTxt Class',
    description: 'Contains 4 new CSS properties allow you to achieve perfect type setting with all your text.',
    path: 'srcry-text-overview',
    breadCrumbs: ['classes', 'srcryTxt']
  }
]

@Injectable({
  providedIn: 'root'
})
export class IntroductionPageService {
  HeroHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  HeroHeight = this.HeroHeight$.asObservable();

  LibaryDescriptionData$: BehaviorSubject<CardSummaryData[]> = new BehaviorSubject<CardSummaryData[]>([]);
  LibraryDescriptionData = this.LibaryDescriptionData$.asObservable();

  ClassDescriptionData$: BehaviorSubject<CardSummaryData[]> = new BehaviorSubject<CardSummaryData[]>([]);
  ClassDescriptionData = this.ClassDescriptionData$.asObservable();

  public setHeroHeight(height: number): void{
    this.HeroHeight$.next(height);
  }

  constructor() {
    this.LibaryDescriptionData$.next(LIBRARYDESCRIPTIONDATA);
    this.ClassDescriptionData$.next(CLASSDESCRIPTIONDATA);
  }
}
