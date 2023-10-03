import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { PaginationData } from '@site-types';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'edgeChasePage',
    title: 'EdgeChase',
    path: '/edge-chase'
  },
  next: {
    id: 'stretchShrink',
    title: 'Stretch Shrink',
    path: '/stretch-shrink'
  }
}

@Component({
  selector: 'app-squish-growth-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    DemonstrationFrameComponent,
    CodeDisplayComponent
  ],
  templateUrl: './squish-growth-page.component.html',
  styleUrls: ['./squish-growth-page.component.css']
})
export class SquishGrowthPageComponent {

}
