import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'navigation-component',
  standalone: true,
  imports: [CommonModule, NavLinkComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationComponent {

  Links : string[] = ['Home', 'Products', 'About', 'Customer Service']

}
