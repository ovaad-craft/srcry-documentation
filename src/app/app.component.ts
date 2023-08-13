import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarService } from './layout/sidebar/sidebar.service';
import { FooterComponent } from './layout/footer/footer.component';
import { IntroductionPageService } from './pages/site/introduction-page/introduction-page.service';
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
  animations: [NavbarAnimation, SidebarAnimation],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'srcry-documentation';
  SidebarActive: boolean = false;
  ScrollWatcher: Observable<Event> = fromEvent(window, 'scroll');
  private ScrollSubscription!: Subscription;
  CurrentPage: string = 'home';
  NavBarActive: boolean = false;
  StandardPage: boolean = true;

  constructor(
    private currentRoute: ActivatedRoute,
    private navService: SidebarService,
    private homeService: IntroductionPageService
    ){}

  ngOnInit(): void {
    this.currentRoute.url.subscribe(a => {
      console.log(a);
      //this.CurrentPage = a;
      //this.router.navigateByUrl(a);

      this.navbarManager();
    });

    this.navService.StandardPage.subscribe(a=> {
      this.StandardPage = a
      if(a === false){ document.body.style.overflow = 'hidden'; }

      console.log(this.StandardPage);
    });

    this.ScrollSubscription = this.ScrollWatcher.subscribe(()=>{
      if(this.CurrentPage === 'home'){
        //console.log(this.CurrentPage, this.NavBarActive);
        if(window.scrollY > this.homeService.HeroHeight$.value){ this.NavBarActive = true; }
        else{ this.NavBarActive = false; }
      }
      else{ this.NavBarActive = true; }
    });

  }

  ngOnDestroy(): void {

      //this.StandardPage$.unsubscribe();
      this.ScrollSubscription.unsubscribe();
  }

  /*@HostListener('document:scroll')
  scrollAction(){
    if(this.CurrentPage === 'home'){
      //console.log(this.CurrentPage, this.NavBarActive);
      if(window.scrollY > this.homeService.HeroHeight$.value){ this.NavBarActive = true; }
      else{ this.NavBarActive = false; }
    }
    else{ this.NavBarActive = true; }
  }*/

  public toggleSidebar(state: boolean): void {this.SidebarActive = state; }

  private navbarManager(): void{
    //console.log(this.CurrentPage, this.NavBarActive);
    if(this.CurrentPage === 'home'){ this.NavBarActive = false; }
    else{ this.NavBarActive = true; }
  }
}
