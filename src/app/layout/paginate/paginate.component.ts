import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationData } from '@site-types';
import { SidebarService } from '../sidebar/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'paginate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  @Input() PageData!: PaginationData;

  constructor(private navService: SidebarService){}

  public previousPage(): void{
    this.navService.updatePath(this.PageData.previous!.path);
    if(this.PageData.previous!.breadcrumbs){
      this.navService.updateBreadCrumbs(this.PageData.previous!.breadcrumbs);
    }
  }

  public nextPage(): void{
    this.navService.updatePath(this.PageData.next!.path);
    if(this.PageData.next!.breadcrumbs){
      this.navService.updateBreadCrumbs(this.PageData.next!.breadcrumbs);
    }
  }

}
