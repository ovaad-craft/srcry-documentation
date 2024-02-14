import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() OpenSidebar : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private gaService: GoogleAnalyticsService){}

  public openSidebar(): void{ this.OpenSidebar.emit(true); }

  public launchRepo():void{
    this.gaService.event('event', 'nav_repo_btn_clicked');
  }

}
