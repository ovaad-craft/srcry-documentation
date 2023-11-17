import { Component, OnDestroy, OnInit } from '@angular/core';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule, Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from './layout/sidebar/sidebar.service';
import { FooterComponent } from './layout/footer/footer.component';
import { IntroductionPageService } from './pages/introduction-page/introduction-page.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { NavbarAnimation, PageAnimation, SidebarAnimation } from 'src/assets/animations';

@Component({
  selector    : 'app-root',
  standalone  : true,
  imports     : [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css'],
  animations  : [NavbarAnimation, SidebarAnimation, PageAnimation]
})
export class AppComponent implements OnInit, OnDestroy {

  public  SidebarActive       : boolean           = false;
  private ScrollWatcher       : Observable<Event> = fromEvent(window, 'scroll');
  private ScrollSubscription! : Subscription;
  public  CurrentPage         : string            = '';
  public  NavBarActive        : boolean           = false;

  constructor(
    private location    : Location,
    private navService  : SidebarService,
    private homeService : IntroductionPageService
    ){}

  ngOnInit() : void {
    this.CurrentPage = this.cleanPath(this.location.path());
    
    this.navbarManager();

    this.location.onUrlChange(a => {
      const path : string = this.cleanPath(a);
      
      this.CurrentPage = path;
      this.navService.setInitPath(path);
      this.navbarManager();
    });
    
    
    this.ScrollSubscription = this.ScrollWatcher.subscribe(() => {
      if(this.CurrentPage === 'home'){
        if(window.scrollY > this.homeService.HeroHeight$.value){ this.NavBarActive = true; }
        else{ this.NavBarActive = false; }
      }
    });
    
  }

  ngOnDestroy() : void {
      this.ScrollSubscription.unsubscribe();
  }

  public toggleSidebar(state : boolean) : void { this.SidebarActive = state; }

  private cleanPath(path : string) : string {
    const cleanPath : string[] =  path.split('/');

    return cleanPath[cleanPath.length - 1];
  }

  private navbarManager() : void {
    if(this.CurrentPage === 'home'){ this.NavBarActive = false; }
    else{ this.NavBarActive = true; }
  }

  public routeState(outlet : any) : string {
    return outlet.activatedRouteData.state;
  }

}
