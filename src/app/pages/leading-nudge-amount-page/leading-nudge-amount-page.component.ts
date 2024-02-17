import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { LeadingControllerComponent } from 'src/app/responsive-examples/leading-examples/leading-analyzer/leading-controller/leading-controller.component';
import { PaginationData, PropChartData } from '@site-types';
import { LeadingExampleAComponent } from 'src/app/responsive-examples/leading-examples/leading-example-a/leading-example-a.component';
import { LeadingAnalyzerComponent } from 'src/app/responsive-examples/leading-examples/leading-analyzer/leading-analyzer.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'kerningNudgeAmt',
    title: 'Kerning Nudge Amount',
    path: '/kerning-nudge-amount'
  }
}

const PROPCHART: PropChartData[] = [
  {
    id: 'leadingNudgeAmt',
    title: '--leading-nudge-amt',
    description: 'Increases or decreases the amount of space between each line of text.  Use a positive number to increase the space or a negative number to decrease it.'
  }
]

@Component({
  selector: 'app-leading-nudge-amount-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    CodeDisplayComponent,
    DemonstrationFrameComponent,
    LeadingControllerComponent
  ],
  templateUrl: './leading-nudge-amount-page.component.html',
  styleUrls: ['./leading-nudge-amount-page.component.css']
})
export class LeadingNudgeAmountPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  ChartData: PropChartData[] = PROPCHART;

  DemonstrationComponent01 = LeadingExampleAComponent;
  DemonstrationCode01: string = ` .myclass{
    --text-size: var(--text-artilce-3);
    --leading-nudge-amt: 12;
    --kerning-nudge-amt: 6;
  }
  `;

  DemonstrationComponent02 = LeadingAnalyzerComponent;

  Demo01WindowTrigger : boolean = false;
  Demo02WindowTrigger : boolean = false;

  constructor(private gService: GoogleAnalyticsService){}

 public analyticsTrigger(demo : string): void{
  if(demo === 'Demo01WindowTrigger' && !this.Demo01WindowTrigger){
    this.gService.event('event', 'demonstration', 'Leading Demo 01 Window', undefined, true);
    this.Demo01WindowTrigger = true;
  }
  if(demo === 'Demo02WindowTrigger' && !this.Demo02WindowTrigger){
    this.gService.event('event', 'demonstration', 'Leading Demo 02 Window', undefined, true);
    this.Demo02WindowTrigger = true;
  }
 }

}
