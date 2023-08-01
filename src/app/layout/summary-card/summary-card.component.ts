import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSummaryData } from '@site-types';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {

  @Input() CardData!: CardSummaryData;

  constructor(private navService: SidebarService){}

  public updateRoute():void{
    this.navService.updatePath(this.CardData.path);
    this.navService.updateRoute(this.CardData.path);
    if(this.CardData.breadCrumbs){
      this.navService.updateBreadCrumbs(this.CardData.breadCrumbs);
    }
  }

}
