import { Component, OnDestroy, OnInit } from '@angular/core';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarService } from './layout/sidebar/sidebar.service';
import { FooterComponent } from './layout/footer/footer.component';
import { IntroductionPageService } from './pages/introduction-page/introduction-page.service';
import { Subscription, Observable, fromEvent } from 'rxjs';

export const NavbarAnimation = trigger('navbarAnimation', [
  state('open', style({transform: 'translateY(0)'})),
  state('close', style({transform: 'translateY(var(--tiny-2-1-))'})),
  transition('open <=> close', [animate('800ms ease-in-out')])
]);

export const SidebarAnimation = trigger('sidebarAnimation', [
  state('open', style({transform: 'translateX(0)'})),
  state('close', style({transform: 'translateX(-105%)'})),
  transition('open <=> close', [animate('300ms ease-in-out')])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [NavbarAnimation, SidebarAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'srcry-documentation';
  SidebarActive: boolean = false;
  ScrollWatcher: Observable<Event> = fromEvent(window, 'scroll');
  private ScrollSubscription!: Subscription;
  CurrentPage: string = '';
  NavBarActive: boolean = false;

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private navService: SidebarService,
    private homeService: IntroductionPageService
    ){}

  ngOnInit(): void {
    this.location.onUrlChange(a => {
      const path: string = this.cleanPath(a);

      this.CurrentPage = path;
      this.navService.setInitPath(path);
      this.navbarManager();
    });

    this.ScrollSubscription = this.ScrollWatcher.subscribe(()=>{
      if(this.CurrentPage === 'home'){
        if(window.scrollY > this.homeService.HeroHeight$.value){ this.NavBarActive = true; }
        else{ this.NavBarActive = false; }
      }
    });

  }

  ngOnDestroy(): void {
      this.ScrollSubscription.unsubscribe();
  }

  public toggleSidebar(state: boolean): void {this.SidebarActive = state; }

  private cleanPath(path: string): string{
    const cleanPath: string[] =  path.split('/');
    return cleanPath[cleanPath.length - 1];
  }

  private navbarManager(): void{
    if(this.CurrentPage === 'home'){ this.NavBarActive = false; }
    else{ this.NavBarActive = true; }
  }
}
