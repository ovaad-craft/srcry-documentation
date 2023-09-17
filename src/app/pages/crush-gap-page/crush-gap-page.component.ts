import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData, PropChartData } from '@site-types';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { CrushGapExampleAComponent } from 'src/app/responsive-examples/crush-gap-examples/crush-gap-example-a/crush-gap-example-a.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';

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
  },
  {
    id: 'crushGapH',
    title: '--crushGap-h',
    description: 'Defines the margin between the left and right edges of your element and the screen.'
  },
  {
    id: 'crushGapHNudgeChunk',
    title: '--crushGap-h-nudge-chunk',
    description: 'Adds the defind number of nudge chunks to the --crushGap-h property.'
  },
  {
    id: 'crushGapHNudgeSlice',
    title: '--crushGap-h-nudge-slice',
    description: 'Adds the defined number of nudge slices to the --crushGap-h property.'
  }
]

@Component({
  selector: 'app-crush-gap-page',
  standalone: true,
  imports: [CommonModule, PaginateComponent, PropChartComponent, DemonstrationFrameComponent],
  templateUrl: './crush-gap-page.component.html',
  styleUrls: ['./crush-gap-page.component.css']
})
export class CrushGapPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  PropData: PropChartData[] = PROPCHART;

  DemoComponent_01 = CrushGapExampleAComponent;

}
