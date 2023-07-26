import { Component } from '@angular/core';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export const SidebarAnimation = trigger('sidebarAnimation', [
  state('open', style({transform: 'translateX(0)'})),
  state('close', style({transform: 'translateX(-105%)'})),
  transition('open <=> close', [animate('300ms ease-in-out')])
])

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SidebarAnimation]
})
export class AppComponent {
  SidebarActive: boolean = false;

  public toggleSidebar(state: boolean): void {this.SidebarActive = state; }
}
