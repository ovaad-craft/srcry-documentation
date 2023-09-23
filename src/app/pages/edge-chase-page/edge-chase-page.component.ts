import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { PaginationData } from '@site-types';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'crushGapPage',
    title: 'Crush Gap',
    path: '/crush-gap'
  },
  next: {
    id: 'squishGrowthPage',
    title: 'Squish Growth',
    path: '/squish-growth'
  }
};

@Component({
  selector: 'app-edge-chase-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    DemonstrationFrameComponent,
    CodeDisplayComponent
  ],
  templateUrl: './edge-chase-page.component.html',
  styleUrls: ['./edge-chase-page.component.css']
})
export class EdgeChasePageComponent {

  Pagination: PaginationData = PAGINATIONDATA;

}
