import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData, PaginationData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { TestExampleComponent } from 'src/app/responsive-examples/test-example/test-example.component';
import { Type } from '@angular/compiler';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';

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
    DemonstrationFrameComponent
  ],
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionPageComponent implements OnInit, AfterViewInit, AfterContentChecked {

  LibraryDescriptionData!: CardSummaryData[];
  ClassDescriptionData!: CardSummaryData[];
  @ViewChild('hero', {read: ElementRef, static: true}) Hero!: ElementRef;
  Pagination!: PaginationData;
  FirefoxBrowser!: boolean;

  Demo = TestExampleComponent;

  constructor(
    private homeService: IntroductionPageService,
    private navService: SidebarService,
    private cdr: ChangeDetectorRef
    ){
    this.homeService.LibraryDescriptionData.subscribe(a=> this.LibraryDescriptionData = a);
    this.homeService.ClassDescriptionData.subscribe(a=> this.ClassDescriptionData = a);
    this.Pagination = PAGINATIONDATA;
  }

  ngOnInit(): void {
      this.navService.setPageType(true);
      this.checkIfFirefox();
  }

  ngAfterViewInit(): void {
      this.homeService.setHeroHeight(this.detectHeroHeight());
  }

  ngAfterContentChecked(): void {
      this.cdr.detectChanges();
  }

  private detectHeroHeight():number{
    return this.Hero?.nativeElement.getBoundingClientRect().bottom;
  }

  public changeRoute(path: string): void{
    this.navService.updatePath(path);
    this.navService.updateRoute(path);
  }

  private checkIfFirefox():void{
    if(navigator.userAgent.indexOf('Firefox') !== -1){ this.FirefoxBrowser = true; }
    else{ this.FirefoxBrowser = false; }
  }
}
