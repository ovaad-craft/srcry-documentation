import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { PaginationData, PropChartData } from '@site-types';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { EdgeChaseExampleAComponent } from 'src/app/responsive-examples/edge-chase-examples/edge-chase-example-a/edge-chase-example-a.component';
import { EdgeChaseReadoutComponent } from 'src/app/responsive-examples/edge-chase-examples/edge-chase-readout/edge-chase-readout.component';

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

const PROPCHART: PropChartData[] = [
  {
    id: 'edgeChaseW',
    title: '--edgeChase-w',
    description: 'Defines the maximum amount of white space to preserve between the left and right edges of your element and the edges of the screen triggering the element to expand once the threshold is met.'
  },
  {
    id: 'edgeChaseWNudgeChunk',
    title: '--edgeChase-w-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --edgeChase-w property.'
  },
  {
    id: 'edgeChaseWNudgeSlice',
    title: '--edgeChase-w-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --edgeChase-w property.'
  },
  {
    id: 'chaseStop-w',
    title: '--chaseStop-w',
    description: 'Defines the maximum width your element can expand to before it stops preserving the white space defined in the --edgeChase-w property.'
  },
  {
    id: 'chaseStopWNudgeChunk',
    title: '--chaseStop-w-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --chaseStop-w property.'
  },
  {
    id: 'chaseStopWNudgeSlice',
    title: '--chaseStop-w-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --chaseStop-w property.'
  },
  {
    id: 'edgeChaseH',
    title: '--edgeChase-h',
    description: 'Defines the maximum amount of white space to preserve between the top and bottom edges of your element and the edges of the screen triggering the element to expand once the threshold is met.'
  },
  {
    id: 'edgeChaseHNudgeChunk',
    title: '--edgeChase-h-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --edgeChase-h property.'
  },
  {
    id: 'edgeChaseHNudgeSlice',
    title: '--edgeChase-h-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --edgeChase-h property.'
  },
  {
    id: 'chaseStop-w',
    title: '--chaseStop-h',
    description: 'Defines the maximum height your element can expand to before it stops preserving the white space defined in the --edgeChase-h property.'
  },
  {
    id: 'chaseStopHNudgeChunk',
    title: '--chaseStop-h-nudge-chunk',
    description: 'Defines the amount of nudge chunks to add to the --chaseStop-h property.'
  },
  {
    id: 'chaseStopHNudgeSlice',
    title: '--chaseStop-h-nudge-slice',
    description: 'Defines the amount of nudge slices to add to the --chaseStop-h property.'
  }
];

@Component({
  selector: 'app-edge-chase-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    DemonstrationFrameComponent,
    PropChartComponent,
    CodeDisplayComponent,
    EdgeChaseReadoutComponent
  ],
  templateUrl: './edge-chase-page.component.html',
  styleUrls: ['./edge-chase-page.component.css']
})
export class EdgeChasePageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  PropData: PropChartData[] = PROPCHART;

  Demo_01: string = ` .myClass{
    --baseSize-w: var(--small-1-4);
    --crushGap-w: var(--xTiny-1-3);
    --edgeChase-w: var(--loMed-2-3);
    --chaseStop-w: var(--loMed-2-4);
    --baseSize-h: var(--small-2-4);
    --crushGap-h: var(--xTiny-1-3);
    --edgeChase-h: var(--small-1-4);
    --chaseStop-h: var(--loMed-1-3);
  }
 `;

 DemoComponent_01 = EdgeChaseExampleAComponent;

}
