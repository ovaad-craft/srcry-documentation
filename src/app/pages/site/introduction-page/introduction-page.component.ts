import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { SummaryCardComponent } from 'src/app/layout/summary-card/summary-card.component';
import { CardSummaryData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';

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

  constructor(private homeService: IntroductionPageService, private navService: SidebarService){
    this.homeService.LibraryDescriptionData.subscribe(a=> this.LibraryDescriptionData = a);
    this.homeService.ClassDescriptionData.subscribe(a=> this.ClassDescriptionData = a);
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
