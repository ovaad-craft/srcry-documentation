import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData } from '@site-types';
import { SyntaxFrameComponent } from 'src/app/layout/syntax-frame/syntax-frame.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { TextSizeDemoAComponent } from 'src/app/responsive-examples/text-size-examples/text-size-demo-a/text-size-demo-a.component';
import { TextSizeAnalyzerComponent } from 'src/app/responsive-examples/text-size-examples/text-size-analyzer/text-size-analyzer.component';
import { TextAnalyzerInputComponent } from 'src/app/responsive-examples/text-size-examples/text-size-analyzer/text-analyzer-input/text-analyzer-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'boxSizeLibrary',
    title: 'Box Size Library',
    path: '/box-size-library'
  },
  next: {
    id: 'lineSizeLibrary',
    title: 'Line Size Library',
    path: '/line-size-library'
  }
}

@Component({
  selector: 'app-text-size-library',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    PaginateComponent,
    SyntaxFrameComponent,
    DemonstrationFrameComponent,
    TextSizeDemoAComponent,
    TextAnalyzerInputComponent
  ],
  templateUrl: './text-size-library.component.html',
  styleUrls: ['./text-size-library.component.css']
})
export class TextSizeLibraryComponent implements OnInit {

  Demo_01: string = `  .myTitle{
    font-size: var(--text-title-1);
  }

  .myParagraph{
    font-size: var(--text-article-1);
  }
  
  `;

  Demo_01Component = TextSizeDemoAComponent;
  Demo_02Component = TextSizeAnalyzerComponent;

  Demo_03: string = `  .myclass{
    position: relative;
    font-size: var(--text-title-1);
    top: var(--text-title-1-);
  }
  `;

  Pagination!: PaginationData;

  Demo01WindowTrigger : boolean = false;
  Demo02WindowTrigger : boolean = false;

  constructor(private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
      this.Pagination = PAGINATIONDATA;
  }

  public analyticsWindowTrigger(demo: string) : void {
    if(demo === 'Demo01WindowTrigger'){
      this.Demo01WindowTrigger = true;
      this.gService.event('event', 'demonstration', 'Text Size Library Window 01', undefined, true);
    }
    if(demo === 'Demo02WindowTrigger'){
      this.Demo02WindowTrigger = true;
      this.gService.event('event', 'demonstration', 'Text Size Library Window 02', undefined, true);
    }
  }

}
