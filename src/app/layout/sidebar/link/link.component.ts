import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Link } from '@site-types';

export const DropdownAnimation = trigger('dropdownAnimation',[
    state('open', style({height: '*'})),
    state('closed', style({height: '0px'})),
    transition('open <=> closed', [animate('300ms ease-in-out')])
  ]
);

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  animations: [DropdownAnimation]
})
export class LinkComponent {
  @Input() Link!: Link;
  @Output() Selection: EventEmitter<string> = new EventEmitter<string>();
  SubLinksActive: boolean = false;
  SelectedLink: boolean = false;

  public updatePage(path: string): void{ this.Selection.emit(path); }

  public toggleNavLinks():void{
    this.SubLinksActive = !this.SubLinksActive;
    this.selectLink();
  }
  
  public selectLink(): void{
    this.SelectedLink = !this.SelectedLink;
  }

}
