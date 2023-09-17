import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from 'src/app/layout/paginate/paginate.component';
import { PaginationData } from '@site-types';

const PAGINATIONDATA: PaginationData = {
  previous:{
    id: 'baseSizePage',
    title: 'Base Size',
    path: '/bse-size'
  },
  next:{
    id: 'edgeChase',
    title: 'Edge Chase',
    path: '/edge-chase'
  }
}

@Component({
  selector: 'app-crush-gap-page',
  standalone: true,
  imports: [CommonModule, PaginateComponent],
  templateUrl: './crush-gap-page.component.html',
  styleUrls: ['./crush-gap-page.component.css']
})
export class CrushGapPageComponent {

  Pagination: PaginationData = PAGINATIONDATA;

}
