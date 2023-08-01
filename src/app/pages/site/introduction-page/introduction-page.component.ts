import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData } from '@site-types';

export const LIBRARYDESCRIPTIONDATA: CardSummaryData[] = [
  {
    id: 'boxSizeLibrary',
    title: 'Box Size Library',
    description: 'Contains 220 dynamic sizes for making your elements scale as subtly or drastically as you need.',
    path: 'box-size',
    breadCrumbs: ['libraries']
  },
  {
    id: 'textSizeLibrary',
    title: 'Text Size Library',
    description: 'Contains 35 dynamic sizes for making your text fluid and preserving visual heriarchy.',
    path: 'text-size',
    breadCrumbs: ['libraries']
  },
  {
    id: 'lineSizeLibrary',
    title: 'Line Size Library',
    description: 'Contains 11 dynamic sizes for making adaptable strokes, outlines and borders on your HTML and SVG elements.',
    path: 'text-size',
    breadCrumbs: ['libraries']
  },
]

@Component({
  selector: 'introduction-page',
  standalone: true,
  imports: [CommonModule, SummaryCardComponent],
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements AfterViewInit {

  LibraryDescriptionData!: CardSummaryData[];
  @ViewChild('hero', {read: ElementRef, static: true}) Hero!: ElementRef;

  constructor(private homeService: IntroductionPageService, private navService: SidebarService){
    this.LibraryDescriptionData = LIBRARYDESCRIPTIONDATA;
  }

  ngAfterViewInit(): void {
      this.homeService.setHeroHeight(this.detectHeroHeight());
  }

  private detectHeroHeight():number{
    return this.Hero?.nativeElement.getBoundingClientRect().bottom;
  }

  public changeRoute(path: string): void{
    this.navService.updatePath(path);
    this.navService.updateRoute(path);
  }
}
