import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() OpenSidebar : EventEmitter<boolean> = new EventEmitter<boolean>();

  public openSidebar(): void{ this.OpenSidebar.emit(true); }

}
