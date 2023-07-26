import { Component, OnInit, Input } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Link } from '@site-types';
import { SidebarService } from '../sidebar.service';

export const DropdownAnimation = trigger('dropdownAnimation',[
    state('open', style({height: '*'})),
    state('close', style({height: '0px'})),
    transition('open <=> close', [animate('300ms ease-in-out')])
  ]
);

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  animations: [DropdownAnimation]
})
export class LinkComponent implements OnInit {
  @Input() Link!: Link;
  @Input() BreadCrumbs: string[] = [];
  Category: boolean = false;
  SubLinksActive: boolean = false;
  SelectedLink: boolean = false;

  constructor(private navService: SidebarService){}

  ngOnInit(): void {
    this.checkIfCategory();
    this.navService.BreadCrumbs.subscribe(a => {this.checkBreadCrumbs(a);});
    this.navService.CurrentPath.subscribe(a=> {this.checkPath(a); });
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
      this.navService.updateRoute(this.Link.path!)
    }
    if(this.BreadCrumbs.length === 0){ this.navService.updateBreadCrumbs([]); }
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
