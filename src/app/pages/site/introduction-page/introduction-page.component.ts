import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData, PaginationData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';


const PAGINATIONDATA: PaginationData = {
  previous:{
    id: 'boxSize',
    title: 'Box Size Library',
    path: 'box-size-library',
    breadcrumbs: ['libraries']
  },
  next: {
    id: 'gettingStarted',
    title: 'Getting Started',
    path: 'getting-started'
  }
}

@Component({
  selector: 'introduction-page',
  standalone: true,
  imports: [CommonModule, SummaryCardComponent, PaginateComponent],
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements AfterViewInit {

  LibraryDescriptionData!: CardSummaryData[];
  ClassDescriptionData!: CardSummaryData[];
  @ViewChild('hero', {read: ElementRef, static: true}) Hero!: ElementRef;
  Pagination!: PaginationData;

  constructor(private homeService: IntroductionPageService, private navService: SidebarService){
    this.homeService.LibraryDescriptionData.subscribe(a=> this.LibraryDescriptionData = a);
    this.homeService.ClassDescriptionData.subscribe(a=> this.ClassDescriptionData = a);
    this.Pagination = PAGINATIONDATA;
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
