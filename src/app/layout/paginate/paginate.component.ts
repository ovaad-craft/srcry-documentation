import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationData } from '@site-types';
import { SidebarService } from '../sidebar/sidebar.service';
import { RouterLink } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'paginate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  @Input() PageData!: PaginationData;

  constructor(private navService: SidebarService, private gService: GoogleAnalyticsService){}

  public previousPage(): void{
    this.navService.updatePath(this.PageData.previous!.path);
    if(this.PageData.previous!.breadcrumbs){
      this.navService.updateBreadCrumbs(this.PageData.previous!.breadcrumbs);
    }
    this.gService.event('event', 'pagination_btn_click', this.PageData.previous!.id);
  }

  public nextPage(): void{
    this.navService.updatePath(this.PageData.next!.path);
    if(this.PageData.next!.breadcrumbs){
      this.navService.updateBreadCrumbs(this.PageData.next!.breadcrumbs);
    }
    this.gService.event('event', 'pagination_btn_click', this.PageData.next!.id);
  }

}
