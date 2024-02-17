import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { PaginationData, PropChartData } from '@site-types';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { TextAnalyzerBComponent } from 'src/app/responsive-examples/text-size-examples/text-analyzer-b/text-analyzer-b.component';
import { TextAnalyzerBControllerComponent } from 'src/app/responsive-examples/text-size-examples/text-analyzer-b/text-analyzer-b-controller/text-analyzer-b-controller.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'srcryTxtOverview',
    title: 'srcryTxt Overview',
    path: '/srcry-text-overview'
  },
  next: {
    id: 'kerningNudgeAmount',
    title: 'Kerning Nudge Amount',
    path: '/kerning-nudge-amount'
  }
};

const PROPCHART: PropChartData[] = [
  {
    id: 'textSize',
    title: '--text-size',
    description: 'For defining the size of your text.'
  },
  {
    id: 'textNudgeAmt',
    title: '--text-nudge-amt',
    description: 'For adjusting the size of your text up or down in small increments.  This property uses numbers.'
  }
];

@Component({
  selector: 'app-text-size-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    DemonstrationFrameComponent,
    TextAnalyzerBControllerComponent
  ],
  templateUrl: './text-size-page.component.html',
  styleUrls: ['./text-size-page.component.css']
})
export class TextSizePageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  ChartData: PropChartData[] = PROPCHART;

  DemoComponent = TextAnalyzerBComponent;

  Demo01WindowTrigger: boolean = false;

  constructor(private gService: GoogleAnalyticsService){}

  public analyticsTrigger(demo: string): void{
    if(demo === 'Demo01WindowTrigger' && !this.Demo01WindowTrigger){
      this.gService.event('event', 'demonstration', 'Squish Growth Demo 01 Window', undefined, true);
      this.Demo01WindowTrigger = true;
    }
  }

}
