import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData, PaginationData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { ResponsiveWindowComponent } from 'src/app/layout/responsive-window/responsive-window.component';
import { TestExampleComponent } from 'src/app/responsive-examples/test-example/test-example.component';
import { Type } from '@angular/compiler';


const PAGINATIONDATA: PaginationData = {
  next: {
    id: 'gettingStarted',
    title: 'Getting Started',
    path: 'getting-started'
  }
}

@Component({
  selector: 'introduction-page',
  standalone: true,
  imports: [
    CommonModule,
    SummaryCardComponent,
    PaginateComponent,
    TestExampleComponent,
    ResponsiveWindowComponent
  ],
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements OnInit, AfterViewInit {

  LibraryDescriptionData!: CardSummaryData[];
  ClassDescriptionData!: CardSummaryData[];
  @ViewChild('hero', {read: ElementRef, static: true}) Hero!: ElementRef;
  Pagination!: PaginationData;

  Demo = TestExampleComponent;

  constructor(private homeService: IntroductionPageService, private navService: SidebarService){
    this.homeService.LibraryDescriptionData.subscribe(a=> this.LibraryDescriptionData = a);
    this.homeService.ClassDescriptionData.subscribe(a=> this.ClassDescriptionData = a);
    this.Pagination = PAGINATIONDATA;
  }

  ngOnInit(): void {
      this.navService.setPageType(true);
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
