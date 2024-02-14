import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSummaryData } from '@site-types';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router, RouterLink } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'summary-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {

  @Input() CardData!: CardSummaryData;

  constructor(private navService: SidebarService, private gService: GoogleAnalyticsService){}

  public updateRoute():void{
    this.navService.updatePath(this.CardData.path);
    if(this.CardData.breadCrumbs){
      this.navService.updateBreadCrumbs(this.CardData.breadCrumbs);
    }
    this.gService.event('event', 'summary_card_btn_click', this.CardData.id);
  }

}
