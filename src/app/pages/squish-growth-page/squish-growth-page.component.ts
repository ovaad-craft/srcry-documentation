import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { PaginationData, PropChartData } from '@site-types';

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

const PROPCHART: PropChartData[] =[
  {
    id: 'squishGrowthWStart',
    title: '--squishGrowth-w-start',
    description: 'For defining the screen height at which the width of the element should start expanding as the height continues to decrease.  This should be defined as a pixel value.'
  },
  {
    id: 'squishGrowthWSpeed',
    title: '--squishGrowth-w-speed',
    description: 'The speed at which the width of the element should grow as the height decreases.  This property is defined with a number'
  },
  {
    id: 'squishGrowthWMax',
    title: '--squishGrowth-w-max',
    description: 'The maximum width the element should grow to.'
  },
  {
    id: 'squishGrowthWMaxNudgeChunk',
    title: '--squishGrowth-w-max-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --squishGrowth-w-max property.'
  },
  {
    id: 'squishGrowthWMaxNudgeSlice',
    title: '--squishGrowth-w-max-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --squishGrowth-w-max property.'
  },
  {
    id: 'squishGrowthHStart',
    title: '--squishGrowth-h-start',
    description: 'For defining the screen width at which the height of the element should start expanding as the width continues to decrease.  This should be defined as a pixel value.'
  },
  {
    id: 'squishGrowthHSpeed',
    title: '--squishGrowth-h-speed',
    description: 'The speed at which the height of the element should grow as the width decreases.  This property is defined with a number'
  },
  {
    id: 'squishGrowthHMax',
    title: '--squishGrowth-h-max',
    description: 'The maximum height the element should grow to.'
  },
  {
    id: 'squishGrowthHMaxNudgeChunk',
    title: '--squishGrowth-h-max-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --squishGrowth-h-max property.'
  },
  {
    id: 'squishGrowthHMaxNudgeSlice',
    title: '--squishGrowth-h-max-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --squishGrowth-h-max property.'
  },
]

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
