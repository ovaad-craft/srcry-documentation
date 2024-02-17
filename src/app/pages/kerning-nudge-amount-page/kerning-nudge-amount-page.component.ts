import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationData, PropChartData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { KerningExampleAComponent } from 'src/app/responsive-examples/kerning-examples/kerning-example-a/kerning-example-a.component';
import { KerningAnalyzerComponent } from 'src/app/responsive-examples/kerning-examples/kerning-analyzer/kerning-analyzer.component';
import { KerningControllerComponent } from 'src/app/responsive-examples/kerning-examples/kerning-analyzer/kerning-controller/kerning-controller.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'textSize',
    title: 'Text Size',
    path: '/text-size'
  },
  next: {
    id: 'leadingNudgeAmt',
    title: 'Leading Nudge Amount',
    path: '/leading-nudge-amount'
  }
}

const PROPCHART: PropChartData[]=[
  {
    id: 'kerningNudgeAmt',
    title: '--kerning-nudge-amt',
    description: 'Increases or decreases the amount of space between each letter.  Use a positive number to increase or negative number to decrease.'
  }
]

@Component({
  selector: 'app-kerning-nudge-amount-page',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    CodeDisplayComponent,
    DemonstrationFrameComponent,
    KerningControllerComponent
  ],
  templateUrl: './kerning-nudge-amount-page.component.html',
  styleUrls: ['./kerning-nudge-amount-page.component.css']
})
export class KerningNudgeAmountPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  ChartData: PropChartData[] = PROPCHART;

  DemonstrationComponent01 = KerningExampleAComponent;
  DemonstrationCode01: string = ` .myClass{
  --text-size: var(--text-article-3);
  --kerning-nudge-amt: 11;
 }`;

 DemonstrationComponent02 = KerningAnalyzerComponent;

 Demo01WindowTrigger : boolean = false;
 Demo02WindowTrigger : boolean = false;

 constructor(private gService: GoogleAnalyticsService){}

 public analyticsTrigger(demo : string): void{
  if(demo === 'Demo01WindowTrigger' && !this.Demo01WindowTrigger){
    this.gService.event('event', 'demonstration', 'Kerning Demo 01 Window', undefined, true);
    this.Demo01WindowTrigger = true;
  }
  if(demo === 'Demo02WindowTrigger' && !this.Demo02WindowTrigger){
    this.gService.event('event', 'demonstration', 'Kerning Demo 02 Window', undefined, true);
    this.Demo02WindowTrigger = true;
  }
 }

}
