import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData } from '@site-types';
import { SyntaxFrameComponent } from 'src/app/layout/syntax-frame/syntax-frame.component';
import { HighlightModule } from 'ngx-highlightjs';
import { LineSizeDemoAComponent } from 'src/app/responsive-examples/line-size-examples/line-size-demo-a/line-size-demo-a.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { LineAnalyzerInputComponent } from 'src/app/responsive-examples/line-size-examples/line-size-analyzer/line-analyzer-input/line-analyzer-input.component';
import { LineSizeAnalyzerComponent } from 'src/app/responsive-examples/line-size-examples/line-size-analyzer/line-size-analyzer.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'textSizeLibrary',
    title: 'Text Size Library',
    path: '/text-size-library'
  },
  next: {
    id: 'srcryBoxOverview',
    title: 'Srcry Box Overview',
    path: '/srcry-box-overview'
  }
}

@Component({
  selector: 'app-line-size-library',
  standalone: true,
  imports: [
    CommonModule,
    PaginateComponent,
    SyntaxFrameComponent,
    HighlightModule,
    DemonstrationFrameComponent,
    LineSizeDemoAComponent,
    LineSizeAnalyzerComponent,
    LineAnalyzerInputComponent
  ],
  templateUrl: './line-size-library.component.html',
  styleUrls: ['./line-size-library.component.css']
})
export class LineSizeLibraryComponent implements OnInit {

  Pagination!: PaginationData;

  Demo_01: string = ` .myClass{
     border: var(--line-narrow) solid blue;
   }`;

   Demo_01_Component = LineSizeDemoAComponent;

   Demo_02_Component = LineSizeAnalyzerComponent;

   Demo01WindowTrigger : boolean = false;
   Demo02WindowTrigger : boolean = false;

   constructor(private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
      this.Pagination = PAGINATIONDATA;
  }

  public triggerAnalytics(demo: string) : void {
    if(demo === 'Demo01WindowTrigger' && !this.Demo01WindowTrigger){
      this.gService.event('event', 'demonstration', 'Line Size Library Window 01', undefined, true);
      this.Demo01WindowTrigger = true;
    }
    if(demo === 'Demo02WindowTrigger' && !this.Demo02WindowTrigger){
      this.gService.event('event', 'demonstration', 'Line Size Library Window 02', undefined, true);
      this.Demo02WindowTrigger = true;
    }
  }
}
