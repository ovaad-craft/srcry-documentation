import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterContentChecked, ChangeDetectorRef, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData, PaginationData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { NavigationComponent } from 'src/app/responsive-examples/introduction-examples/navigation/navigation.component';
import { ProductComponent } from 'src/app/responsive-examples/introduction-examples/product/product.component';
import { ArticleComponent } from 'src/app/responsive-examples/introduction-examples/article/article.component';
import { RouterLink } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA : PaginationData = {
  next : {
    id    : 'gettingStarted',
    title : 'Getting Started',
    path  : '/getting-started'
  }
}

@Component({
  selector        : 'introduction-page',
  standalone      : true,
  imports         : [
    CommonModule,
    RouterLink,
    SummaryCardComponent,
    PaginateComponent,
    DemonstrationFrameComponent
  ],
  templateUrl     : './introduction-page.component.html',
  styleUrls       : ['./introduction-page.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class IntroductionPageComponent implements OnInit, AfterViewInit, AfterContentChecked {

  LibraryDescriptionData!                                    : CardSummaryData[];
  ClassDescriptionData!                                      : CardSummaryData[];
  @ViewChild('hero', {read: ElementRef, static: true}) Hero! : ElementRef;
  Pagination!                                                : PaginationData;
  FirefoxBrowser!                                            : boolean;

  NavDemo     = NavigationComponent;
  ProductDemo = ProductComponent;
  ArticleDemo = ArticleComponent;

  NavDemoAnalytic     : boolean = false;
  ProductCardAnalytic : boolean = false;
  ArticleCardAnalytic : boolean = false;

  constructor(
    private homeService : IntroductionPageService,
    private navService  : SidebarService,
    private gService    : GoogleAnalyticsService,
    private cdr         : ChangeDetectorRef
    ){}
    
    ngOnInit() : void {
      this.checkIfFirefox();
      this.homeService.LibraryDescriptionData.subscribe(a=> this.LibraryDescriptionData = a);
      this.homeService.ClassDescriptionData.subscribe(a=> this.ClassDescriptionData = a);
      this.Pagination = PAGINATIONDATA;
  }

  ngAfterViewInit() : void {
      this.homeService.setHeroHeight(this.detectHeroHeight());
  }

  ngAfterContentChecked() : void {
      this.cdr.detectChanges();
  }

  private detectHeroHeight() : number{
    return this.Hero?.nativeElement.offsetHeight;
  }

  public changePath(path : string) : void{
    this.navService.updatePath(path);
    this.gService.event('event', 'intro_get_started_btn_clicked');
  }

  private checkIfFirefox() : void{
    if(navigator.userAgent.indexOf('Firefox') !== -1){ this.FirefoxBrowser = true; }
    else{ this.FirefoxBrowser = false; }
  }

  public sendDemoAnalytics(demo: string):void{
    if(demo === 'NavDemoTrigger' && !this.NavDemoAnalytic){
      this.gService.event('event', 'demonstration', 'Intro Nav Demo Window', undefined, true);
      this.NavDemoAnalytic = true;
    }
    if(demo === 'ProductCardTrigger' && !this.ProductCardAnalytic){
      this.gService.event('event', 'demonstration', 'Intro Product Card Window', undefined, true);
      this.ProductCardAnalytic = true;      
    }
    if(demo === 'ArticleDemoTrigger' && !this.ArticleCardAnalytic){
      this.gService.event('event', 'demonstration', 'Intro Article Demo Window', undefined, true);
      this.ArticleCardAnalytic = true;
    }
  }
}
