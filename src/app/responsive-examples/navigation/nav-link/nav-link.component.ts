import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavLinkComponent {

  @Input() Link! : string;

}
