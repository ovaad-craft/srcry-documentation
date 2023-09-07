import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { Link, PaginationData } from '@site-types';
import { RouterLink } from '@angular/router';

const LINKS: Link[] = [
  {
    id: 'baseSize',
    title: 'Base Size',
    path: 'base-size'
  },{
    id: 'crushGap',
    title: 'Crush Gap',
    path: 'crus-gap'
  },
  {
    id: 'edgeChase',
    title: 'Edge Chase',
    path: 'edge-chase'
  },
  {
    id: 'chaseStop',
    title: 'Chase Stop',
    path: 'chase-stop'
  },
  {
    id: 'squishGrowth',
    title: 'Squish Growth',
    path: 'squish-growth'
  },
  {
    id: 'stretchShrink',
    title: 'Stretch Shrink',
    path: 'stretch-shrink'
  },
  {
    id: 'bleed',
    title: 'Bleed',
    path: 'bleed'
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
    path: 'base-size'
  }
}

@Component({
  selector: 'app-srcry-box-overview-page',
  standalone: true,
  imports: [CommonModule, PaginateComponent, RouterLink],
  templateUrl: './srcry-box-overview-page.component.html',
  styleUrls: ['./srcry-box-overview-page.component.css']
})
export class SrcryBoxOverviewPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  Links: Link[] = LINKS;

}
