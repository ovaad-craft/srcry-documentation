import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { Link, PaginationData } from '@site-types';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const LINKS: Link[] = [
  {
    id: 'baseSize',
    title: 'Base Size',
    path: '/base-size'
  },{
    id: 'crushGap',
    title: 'Crush Gap',
    path: '/crush-gap'
  },
  {
    id: 'edgeChase',
    title: 'Edge Chase',
    path: '/edge-chase'
  },
  {
    id: 'chaseStop',
    title: 'Chase Stop',
    path: '/chase-stop'
  },
  {
    id: 'squishGrowth',
    title: 'Squish Growth',
    path: '/squish-growth'
  },
  {
    id: 'stretchShrink',
    title: 'Stretch Shrink',
    path: '/stretch-shrink'
  }
]
const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'lineSizeLibrary',
    title: 'Line Size Library',
    path: '/line-size-library'
  },
  next: {
    id: 'baseSize',
    title: 'Base Size',
    path: '/base-size'
  }
}

@Component({
  selector: 'app-srcry-box-overview-page',
  standalone: true,
  imports: [CommonModule, PaginateComponent, RouterLink, HighlightModule],
  templateUrl: './srcry-box-overview-page.component.html',
  styleUrls: ['./srcry-box-overview-page.component.css']
})
export class SrcryBoxOverviewPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  Links: Link[] = LINKS;

  Demo_01A: string = ` <div class="srcryBox myClass"></div>`;

  Demo_01B: string = ` .myClass{
  /*define srcryBox properties here*/
 }
  `;

  constructor(private gService: GoogleAnalyticsService){}

  public analyticsTrigger(page: string): void{
    this.gService.event('event', 'link_click', page);
  }

}
