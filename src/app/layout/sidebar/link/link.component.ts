import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '@site-types';
import { SidebarService } from '../sidebar.service';
import { RouterLink } from '@angular/router';
import { DropdownAnimation } from 'src/assets/animations';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  animations: [DropdownAnimation]
})
export class LinkComponent implements OnInit {
  @Input()  Link!       : Link;
  @Input()  BreadCrumbs : string[]           = [];
  @Output() CloseNav    : EventEmitter<void> = new EventEmitter<void>()
  Category              : boolean            = false;
  SubLinksActive        : boolean            = false;
  SelectedLink          : boolean            = false;

  constructor(private navService: SidebarService, private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
    this.checkIfCategory();
    this.navService.BreadCrumbs.subscribe(a => {this.checkBreadCrumbs(a);});
    this.navService.CurrentPath.subscribe(a=> {this.checkPath(a); });
  }

  public closeNav():void{
    this.CloseNav.emit();
  }

  private checkIfCategory():void{
    if (this.Link.subLinks){ this.Category = true; }
  }

  public handleCategory():void{
    this.SelectedLink = !this.SelectedLink;
    this.SubLinksActive = !this.SubLinksActive;

    if(this.SelectedLink){
      this.navService.updateBreadCrumbs(this.breadCrumbs());
      this.navService.updatePath('none');
    }
    else{
      this.navService.removeBreadCrumb(this.Link.id);
    }

  }

  public handleLink():void{
    if(!this.SelectedLink){
      this.SelectedLink = true;
      this.navService.updatePath(this.Link.path!);
    }
    if(this.BreadCrumbs.length === 0){ this.navService.updateBreadCrumbs([]); }
    this.gService.event('event', 'sidebar_btn_click', undefined, undefined, undefined, {'link_id' : this.Link.id});
  }

  private checkBreadCrumbs(crumbs: string[]){
    if(this.Category){
      if (crumbs.includes(this.Link.id)){
        this.SelectedLink = true;
        this.SubLinksActive = true;
      }
      else{
        this.SelectedLink = false;
        this.SubLinksActive = false;
      }
    }
  }

  private checkPath(path: string): void{
    
    if(!this.Category){
      if(this.Link.path === path){
        this.SelectedLink = true;
      }
      else{ this.SelectedLink = false; }
    }
  }

  public breadCrumbs(): string[]{ return [...this.BreadCrumbs, this.Link.id]}

}
