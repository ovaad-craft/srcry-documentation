import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Link } from 'src/app/types/site-types';
import { SidebarService } from './sidebar.service';
import { LinkComponent } from './link/link.component';


@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  Links!: Link[];

  @Output()CloseSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private linkService: SidebarService){
  }

  ngOnInit(): void {
      this.loadLinks();
  }

  private loadLinks(): void{
    this.Links = this.linkService.getLinks();
  }

  public closeSidebar():void{
    this.CloseSidebar.emit(false);
  }

}
