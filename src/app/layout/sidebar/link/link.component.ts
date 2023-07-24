import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '@site-types';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
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
