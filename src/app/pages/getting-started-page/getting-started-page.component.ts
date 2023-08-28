import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData } from '@site-types';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'introduction',
    title: 'Introduction',
    path: '/home'
  },
  next: {
    id: 'boxSize',
    title: 'Box Size Library',
    path: '/box-size-library',
    breadcrumbs: ['libraries']
  }
}

@Component({
  selector: 'app-getting-started-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HighlightModule,
    PaginateComponent
  ],
  templateUrl: './getting-started-page.component.html',
  styleUrls: ['./getting-started-page.component.css']
})
export class GettingStartedPageComponent {

  code: string =
  `@import url('path/to/folder/srcry.css');`;

Pagination!: PaginationData;

  constructor(){
    this.Pagination = PAGINATIONDATA;
  }

}
