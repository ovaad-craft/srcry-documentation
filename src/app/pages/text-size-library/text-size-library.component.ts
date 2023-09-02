import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData } from '@site-types';
import { SyntaxFrameComponent } from 'src/app/layout/syntax-frame/syntax-frame.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { TextSizeDemoAComponent } from 'src/app/responsive-examples/text-size-demo-a/text-size-demo-a.component';
import { TextSizeAnalyzerComponent } from 'src/app/responsive-examples/text-size-analyzer/text-size-analyzer.component';
import { TextAnalyzerInputComponent } from 'src/app/responsive-examples/text-size-analyzer/text-analyzer-input/text-analyzer-input.component';

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

  Pagination!: PaginationData;

  ngOnInit(): void {
      this.Pagination = PAGINATIONDATA;
  }

}
