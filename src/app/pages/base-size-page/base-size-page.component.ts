import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData, PropChartData } from '@site-types';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { BaseSizeExampleAComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-a/base-size-example-a.component';
import { BaseSizeExampleBComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-b/base-size-example-b.component';
import { BaseSizeExampleCComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-c/base-size-example-c.component';
import { BaseSizeCReadoutComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-c/base-size-c-readout/base-size-c-readout.component';
import { BaseSizeExampleDComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-d/base-size-example-d.component';
import { BaseExampleDReadoutComponent } from 'src/app/responsive-examples/base-size-examples/base-size-example-d/base-example-d-readout/base-example-d-readout.component';
import { BaseSizeAnalyzerComponent } from 'src/app/responsive-examples/base-size-examples/base-size-analyzer/base-size-analyzer.component';
import { BaseSizeAnalyzerControllerComponent } from 'src/app/responsive-examples/base-size-examples/base-size-analyzer/base-size-analyzer-controller/base-size-analyzer-controller.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BaseSizePageService } from './base-size-page.service';

const PAGINATIONDATA: PaginationData = {
  previous:{
    id: 'srcryBoxOverview',
    title: 'Srcry Box Overview',
    path: '/srcry-box-overview'
  },
  next:{
    id: 'crushGap',
    title: 'Crush Gap',
    path: '/crush-gap'
  }
}

const PROPCHART: PropChartData[] = [
  {
    id: 'baseSizeW',
    title: '--baseSize-w',
    description: 'Defines the core width of your element.'
  },
  {
    id: 'baseSizeWnudgeSlice',
    title: '--baseSize-w-nudge-slice',
    description: 'Adds the defined number of nudge slices to the --baseSize-w property.'
  },
  {
    id: 'baseSizeWnudgeChunk',
    title: '--baseSize-w-nudge-chunk',
    description: 'Adds the defined number of nudge chunks to the --baseSize-w property.'
  },
  {
    id: 'baseSizeH',
    title: '--baseSize-h',
    description: 'Defines the core height of your element.'
  },
  {
    id: 'baseSizeHnudgeSlice',
    title: '--baseSize-h-nudge-slice',
    description: 'Adds the defined number of nudge slices to the --baseSize-h property.'
  },
  {
    id: 'baseSizeHnudgeChunk',
    title: '--baseSize-h-nudge-chunk',
    description: 'Adds the defined number of nudge chunks to the --baseSize-h property.'
  }
]

@Component({
  selector: 'base-size-page',
  standalone: true,
  imports: [
    CommonModule,
    PropChartComponent,
    CodeDisplayComponent,
    PaginateComponent,
    DemonstrationFrameComponent,
    BaseSizeCReadoutComponent,
    BaseExampleDReadoutComponent,
    BaseSizeAnalyzerControllerComponent
  ],
  templateUrl: './base-size-page.component.html',
  styleUrls: ['./base-size-page.component.css']
})
export class BaseSizePageComponent implements OnInit, OnDestroy {
  
  Demo_01: string = `  .myClass{
    --baseSize-w: var(--tiny-1-4);
    --baseSize-h: var(--xTiny-1-5);
    display: block;
    background-color: blue;
  }
  `;
  Demo_01_Component = BaseSizeExampleAComponent;

  Demo_02: string = `  .myClass{
    font-size: var(--text-article-4);
    --baseSize-w: 11ch;
    --baseSize-h: 5ch;
    display: block;
    background-color: blue;
  }
  `;
  Demo_02_Component = BaseSizeExampleBComponent;

  Demo_03: string = `  .myClass{
    --baseSize-w: var(--tiny-1-7);
    --baseSize-w-nudge-chunk: 2;
    --baseSize-w-nudge-slice: 5;
  }
  `;
  Demo_03_Component = BaseSizeExampleCComponent;

  Demo_04_Component = BaseSizeExampleDComponent;

  Demo_04: string = `  .myClass{
    --baseSize-w: var(--tiny-1-8);
    --baseSize-w-nudge-chunk: -3;
  }
  `;

  Demo_05_Component = BaseSizeAnalyzerComponent;

  Pagination: PaginationData = PAGINATIONDATA;
  PropData: PropChartData[] = PROPCHART;

  Demo01WindowTrigger: boolean = false;
  Demo02WindowTrigger: boolean = false;
  Demo03WindowTrigger: boolean = false;
  Demo04WindowTrigger: boolean = false;
  Demo05WindowTrigger: boolean = false;

  constructor(private channelService: BaseSizePageService,private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
      this.channelService.createBroadcastChannel('baseSizeExample');
  }

  public analyticsTrigger(demo: string): void{
    if(demo === 'Demo01WindowTrigger'){
      this.gService.event('event', 'demonstration', 'Base Size Demo 01 Window', undefined, true);
      this.Demo01WindowTrigger = true;
    }
    if(demo === 'Demo02WindowTrigger'){
      this.gService.event('event', 'demonstration', 'Base Size Demo 02 Window', undefined, true);
      this.Demo02WindowTrigger = true;
    }
    if(demo === 'Demo03WindowTrigger'){
      this.gService.event('event', 'demonstration', 'Base Size Demo 03 Window', undefined, true);
      this.Demo03WindowTrigger = true;
    }
    if(demo === 'Demo04WindowTrigger'){
      this.gService.event('event', 'demonstration', 'Base Size Demo 04 Window', undefined, true);
      this.Demo04WindowTrigger = true;
    }
    if(demo === 'Demo05WindowTrigger'){
      this.gService.event('event', 'demonstration', 'Base Size Demo 05 Window', undefined, true);
      this.Demo05WindowTrigger = true;
    }
  }

  ngOnDestroy(): void {
      this.channelService.closeChannel();
  }

}
