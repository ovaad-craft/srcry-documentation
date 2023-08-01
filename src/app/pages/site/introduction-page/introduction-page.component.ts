import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageService } from './introduction-page.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';

@Component({
  selector: 'introduction-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements AfterViewInit {

  @ViewChild('hero', {read: ElementRef, static: true}) Hero!: ElementRef;

  constructor(private homeService: IntroductionPageService, private navService: SidebarService){}

  ngAfterViewInit(): void {
      this.homeService.setHeroHeight(this.detectHeroHeight());
  }

  private detectHeroHeight():number{
    return this.Hero?.nativeElement.getBoundingClientRect().bottom;
  }

  public changeRoute(path: string): void{
    this.navService.updatePath(path);
    this.navService.updateRoute(path);
  }
}
