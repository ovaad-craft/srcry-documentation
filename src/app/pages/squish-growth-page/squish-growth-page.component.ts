import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { PaginationData, PropChartData } from '@site-types';
import { SquishGrowthExampleAControllerComponent } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-example-a/squish-growth-example-a-controller/squish-growth-example-a-controller.component';
import { SquishGrowthExampleAComponent } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-example-a/squish-growth-example-a.component';
import { SquishGrowthAnalyzerControllerComponent } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-analyzer/squish-growth-analyzer-controller/squish-growth-analyzer-controller.component';
import { SquishGrowthAnalyzerComponent } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-analyzer/squish-growth-analyzer.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

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
    description: 'The speed at which the width of the element should grow as the height decreases.  This property is defined with a number.'
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
    description: 'The speed at which the height of the element should grow as the width decreases.  This property is defined with a number.'
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
    CodeDisplayComponent,
    SquishGrowthExampleAControllerComponent,
    SquishGrowthAnalyzerControllerComponent
  ],
  templateUrl: './squish-growth-page.component.html',
  styleUrls: ['./squish-growth-page.component.css']
})
export class SquishGrowthPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  ChartData: PropChartData[] = PROPCHART;

  Demo01Code: string = ` .myClass{
   --crushGap-w: var(--xTiny-2-4);
   --baseSize-w: var(--small-1-3);
   --squishGrowth-w-start: 700px;
   --squishGrowth-w-speed: 14;
   --squishGrowth-w-max: var(--loMed-2-5);
   max-width: 90vw;
 }
  `;
  DemoComponent01 = SquishGrowthExampleAComponent;

  DemoComponent02 = SquishGrowthAnalyzerComponent;

  Demo01WindowTrigger : boolean = false;
  Demo02WindowTrigger : boolean = false;

  constructor(private gService: GoogleAnalyticsService){}

  public analyticsTrigger(demo: string): void{
    if(demo === 'Demo01WindowTrigger' && !this.Demo01WindowTrigger){
      this.gService.event('event', 'demonstration', 'Squish Growth Demo 01 Window', undefined, true);
      this.Demo01WindowTrigger = true;
    }
    if(demo === 'Demo02WindowTrigger' && !this.Demo02WindowTrigger){
      this.gService.event('event', 'demonstration', 'Squish Growth Demo 02 Window', undefined, true);
      this.Demo02WindowTrigger = true;
    }
  }
}
