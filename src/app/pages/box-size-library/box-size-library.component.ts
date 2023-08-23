import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PaginationData } from '@site-types';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { SyntaxFrameComponent } from 'src/app/layout/syntax-frame/syntax-frame.component';
import { DemonstrationFrameComponent } from 'src/app/layout/demonstration-frame/demonstration-frame.component';
import { BoxSizeDemoAComponent } from 'src/app/responsive-examples/box-size-demo-a/box-size-demo-a.component';
import { BoxSizeDemoBComponent } from 'src/app/responsive-examples/box-size-demo-b/box-size-demo-b.component';

const PAGINATIONDATA: PaginationData = {
  previous: {
    id: 'gettingStarted',
    title: 'Getting Started',
    path: '/getting-started'
  },
  next: {
    id: 'textSize',
    title: 'Text Size Library',
    path: '/text-size-library',
    breadcrumbs: ['libraries']
  }
}

@Component({
  selector: 'app-box-size-library',
  standalone: true,
  imports: [
    CommonModule,
    SyntaxFrameComponent,
    PaginateComponent,
    HighlightModule,
    DemonstrationFrameComponent,
    BoxSizeDemoAComponent,
    BoxSizeDemoBComponent
  ],
  templateUrl: './box-size-library.component.html',
  styleUrls: ['./box-size-library.component.css']
})
export class BoxSizeLibraryComponent {

  Demo_01: string = ` .myClass{
    display: block;
    width: var(--loMed-1-8);
    height: var(--tiny-2-10);
    background-color: blue;
  }
  `;
  Demo_01Component = BoxSizeDemoAComponent;
  
  Demo_02: string = ` .myClass{
    display: block;
    width: var(--loMed-1-3);
    height: var(--tiny-2-3);
    background-color: blue;
  }
  `;
  Demo_02Component = BoxSizeDemoBComponent;

  Pagination!: PaginationData;

  constructor(){
    this.Pagination = PAGINATIONDATA;
  }

}