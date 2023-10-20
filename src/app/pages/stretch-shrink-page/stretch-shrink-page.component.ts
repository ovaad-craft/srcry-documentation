import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { PaginationData, PropChartData } from '@site-types';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { StretchShrinkExampleAComponent } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-example-a/stretch-shrink-example-a.component';
import { StretchShrinkExampleAReadoutComponent } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-example-a/stretch-shrink-example-a-readout/stretch-shrink-example-a-readout.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { StretchShrinkAnalyzerComponent } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-analyzer/stretch-shrink-analyzer.component';
import { StretchShrinkControllerComponent } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-analyzer/stretch-shrink-controller/stretch-shrink-controller.component';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'squishGrowth',
    title: 'Squish Growth',
    path: '/squish-growth'
  },
  next: {
    id: 'srcryTextOverview',
    title: 'Srcry Text Overview',
    path: '/srcry-text-overview'
  }
};

const PROPCHART: PropChartData[] = [
  {
    id: 'stretchShrinkWStart',
    title: '--stretchShrink-w-start',
    description: 'The screen height at which the width of the element should begin decreasing as the height continues to increase.  This should be defined as a pixel value'
  },
  {
    id: 'stetchShrinkWSpeed',
    title: '--stretchShrink-w-speed',
    description: 'The speed at which the width of the element should decrease as the height of the screen increases.  This property is defined with a number.'
  },
  {
    id: 'stretchShrinkWMin',
    title: '--stretchShrink-w-min',
    description: 'The smallest width the element should shrink to.'
  },
  {
    id: 'stretchShrinkWMinNudgeChunk',
    title: '--stretchShrink-w-min-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --squishGrowth-w-min property.'
  },
  {
    id: 'stretchShrinkWMinNudgeSlice',
    title: '--stretchShrink-w-min-nudge-slice',
    description: 'Defineds the amount of nudge slices to add to the --squishGrowth-w-min property.'
  },
  {
    id: 'stretchShrinkHStart',
    title: '--stretchShrink-h-start',
    description: 'The screen width at which the height of the element should begin decreasing as the screen width continues to increase.  This should be defined as a pixel value'
  },
  {
    id: 'stetchShrinkHSpeed',
    title: '--stretchShrink-h-speed',
    description: 'The speed at which the height of the element should decrease as the width of the screen increases.  This property is defined with a number.'
  },
  {
    id: 'stretchShrinkHMin',
    title: '--stretchShrink-h-min',
    description: 'The smallest height the element should shrink to.'
  },
  {
    id: 'stretchShrinkHMinNudgeChunk',
    title: '--stretchShrink-h-min-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --squishGrowth-h-min property.'
  },
  {
    id: 'stretchShrinkHMinNudgeSlice',
    title: '--stretchShrink-h-min-nudge-slice',
    description: 'Defineds the amount of nudge slices to add to the --squishGrowth-h-min property.'
  }
];

@Component({
  selector: 'app-stretch-shrink-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    CodeDisplayComponent,
    DemonstrationFrameComponent,
    StretchShrinkExampleAReadoutComponent,
    StretchShrinkControllerComponent
  ],
  templateUrl: './stretch-shrink-page.component.html',
  styleUrls: ['./stretch-shrink-page.component.css']
})
export class StretchShrinkPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  ChartData: PropChartData[] = PROPCHART;

  Demo01Code: string = ` .myClass{
    --baseSize-w: var(--small-1-3);
    --baseSize-h: var(--small-1-3);
    --stretchShrink-h-start: 700px;
    --stretchShrink-h-speed: 3;
    --stretchShrink-h-min: var(--tiny-1-3);
 }`;
  Demo01Component = StretchShrinkExampleAComponent;

  Demo02Component = StretchShrinkAnalyzerComponent;
}
