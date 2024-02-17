import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { RouterLink } from '@angular/router';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { Link, PaginationData } from '@site-types';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'stretchShrink',
    title: 'Stretch Shrink',
    path: '/stretch-shrink'
  },
  next: {
    id: 'textSize',
    title: 'Text Size',
    path: '/text-size'
  }
}

const LINKS: Link[] = [
  {
    id: 'textSize',
    title: 'Text Size',
    path: '/text-size'
  },
  {
    id: 'kerningNudgeAmt',
    title: 'Kerning Nudge Amount',
    path: '/kerning-nudge-amount'
  },
  {
    id: 'leadingNudgeAmt',
    title: 'Leading Nudge Amount',
    path: '/leading-nudge-amount'
  }
]

@Component({
  selector: 'app-srcry-text-overview-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    RouterLink,
    CodeDisplayComponent
  ],
  templateUrl: './srcry-text-overview-page.component.html',
  styleUrls: ['./srcry-text-overview-page.component.css']
})
export class SrcryTextOverviewPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  Links: Link[] = LINKS;

  Demo_01: string = ` <div class="srcryTxt myClass">
    <!-- code -->
 </div>
  `;

  Demo_02: string = ` .myClass{
    /* define srcryTxt properies here */
 }
  `;

  constructor(private gService: GoogleAnalyticsService){}

  public analyticsTrigger(page: string): void{
    this.gService.event('event', 'srcryText_Overview_link_click', page);
  }

}
