import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSummaryData } from '@site-types';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'summary-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {

  @Input() CardData!: CardSummaryData;

  constructor(private navService: SidebarService){}

  public updateRoute():void{
    this.navService.updatePath(this.CardData.path);
    console.log(this.CardData.path);
    //this.navService.updateRoute(this.CardData.path);
    if(this.CardData.breadCrumbs){
      this.navService.updateBreadCrumbs(this.CardData.breadCrumbs);
    }
  }

}
