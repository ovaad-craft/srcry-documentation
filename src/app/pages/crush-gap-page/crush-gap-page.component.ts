import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData, PropChartData } from '@site-types';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';

const PAGINATIONDATA: PaginationData = {
  previous:{
    id: 'baseSizePage',
    title: 'Base Size',
    path: '/base-size'
  },
  next:{
    id: 'edgeChase',
    title: 'Edge Chase',
    path: '/edge-chase'
  }
}

const PROPCHART: PropChartData[] = [
  {
    id: 'crushGapW',
    title: '--crushGap-w',
    description: 'Defines the margin between the left and right edges of your element and the screen.'
  },
  {
    id: 'crushGapWNudgeChunk',
    title: '--crushGap-w-nudge-chunk',
    description: 'Adds the defind number of nudge chunks to the --crushGap-w property.'
  },
  {
    id: 'crushGapWNudgeSlice',
    title: '--crushGap-w-nudge-slice',
    description: 'Adds the defined number of nudge slices to the --crushGap-w property.'
  }
]

@Component({
  selector: 'app-crush-gap-page',
  standalone: true,
  imports: [CommonModule, PaginateComponent, PropChartComponent],
  templateUrl: './crush-gap-page.component.html',
  styleUrls: ['./crush-gap-page.component.css']
})
export class CrushGapPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  PropData: PropChartData[] = PROPCHART;

}
