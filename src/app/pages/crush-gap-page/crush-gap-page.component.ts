import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData, PropChartData } from '@site-types';
import { PropChartComponent } from 'src/app/layout/prop-chart/prop-chart.component';
import { CrushGapExampleAComponent } from 'src/app/responsive-examples/crush-gap-examples/crush-gap-example-a/crush-gap-example-a.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { CodeDisplayComponent } from 'src/app/layout/code-display/code-display.component';
import { CrushGapAnalyzerComponent } from 'src/app/responsive-examples/crush-gap-examples/crush-gap-analyzer/crush-gap-analyzer.component';
import { CrushGapControllerComponent } from 'src/app/responsive-examples/crush-gap-examples/crush-gap-analyzer/crush-gap-controller/crush-gap-controller.component';

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
    description: 'Adds the defined number of nudge chunks to the --crushGap-w property.'
  },
  {
    id: 'crushGapWNudgeSlice',
    title: '--crushGap-w-nudge-slice',
    description: 'Adds the defined number of nudge slices to the --crushGap-w property.'
  },
  {
    id: 'crushGapH',
    title: '--crushGap-h',
    description: 'Defines the margin between the top and bottom edges of your element and the screen.'
  },
  {
    id: 'crushGapHNudgeChunk',
    title: '--crushGap-h-nudge-chunk',
    description: 'Adds the defined number of nudge chunks to the --crushGap-h property.'
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
  imports: [
    CommonModule,
    PaginateComponent,
    PropChartComponent,
    DemonstrationFrameComponent,
    CodeDisplayComponent,
    CrushGapControllerComponent
  ],
  templateUrl: './crush-gap-page.component.html',
  styleUrls: ['./crush-gap-page.component.css']
})
export class CrushGapPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;
  PropData: PropChartData[] = PROPCHART;

  Demo_01: string = ` .myClass {
   display: block;
   --crushGap-w: var(--xTiny-1-4);
   --baseSize-w: var(--loMed-1-4);
   --crushGap-h: var(--xTiny-1-4);
   --baseSize-h: var(--loMed-1-4);
   background-color: blue;
 }
  `;  
  Demo_01_Component = CrushGapExampleAComponent;

  Demo_02_Component = CrushGapAnalyzerComponent;
  
}
