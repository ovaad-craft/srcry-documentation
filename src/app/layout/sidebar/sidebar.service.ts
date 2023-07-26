import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Link } from 'src/app/types/site-types';

export const LINKS: Link[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    path: 'home'
  },
  {
    id: 'gettingStarted',
    title: 'Getting Started',
    path: 'getting-started'
  },
  {
    id: 'libraries',
    title: 'Libraries',
    subLinks: [
      {
        id: 'boxSize',
        title: 'Box Size Library',
        path: 'box-size-library'
      },
      {
        id: 'textSize',
        title: 'Text Size Library',
        path: 'text-size-library'
      },
      {
        id: 'lineSize',
        title: 'Line Size Library',
        path: 'line-size-library'
      }
    ]
  },
  {
    id: 'classes',
    title: 'Classes',
    subLinks: [
      {
        id: 'srcryBox',
        title: 'Srcry Box Class',
        subLinks: [
          {
            id: 'srcryBoxOverview',
            title: 'Srcry Box Overview',
            path: 'srcry-box-overview'
          },
          {
            id: 'baseSize',
            title: 'Base Size',
            path: 'base-size'
          },
          {
            id: 'edgeChase',
            title: 'Edge Chase',
            path: 'edge-chase'
          },
          {
            id: 'chaseStop',
            title: 'Chase Stop',
            path: 'chase-stop'
          },
          {
            id: 'squishGrowth',
            title: 'Squish Growth',
            path: 'squish-growth'
          },
          {
            id: 'stretchShrink',
            title: 'Stretch Shrink',
            path: 'stretch-shrink'
          },
          {
            id: 'bleed',
            title: 'Bleed',
            path: 'bleed'
          }
        ]
      },
      {
        id: 'srcryTxt',
        title: 'Srcry Text Class',
        subLinks: [
          {
            id: 'srcryTextOverview',
            title: 'Srcry Text Overview',
            path: 'srcry-text-overview'
          },
          {
            id: 'textSize',
            title: 'Text Size',
            path: 'text-size'
          },
          {
            id: 'textNudgeAmount',
            title: 'Text Nudge Amount',
            path: 'text-nudge-amount'
          },
          {
            id: 'kerningNudgeAmount',
            title: 'Kerning Nudge Amount',
            path: 'kerning-nudge-amount'
          },
          {
            id: 'leadingNudgeAmount',
            title: 'Leading Nudge Amount',
            path: 'leading-nudge-amount'
          }
        ]
      }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private Links : Link[] = [];
  private CurrentPath$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public CurrentPath = this.CurrentPath$.asObservable();

  private Route$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public Route = this.Route$.asObservable();

  private BreadCrumbs$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public BreadCrumbs = this.BreadCrumbs$.asObservable();

  constructor() {
    this.loadLinks();
  }

  private loadLinks(): void{
    this.Links = LINKS;
  }

  public getLinks(): Link[]{
    return this.Links;
  }

  public updatePath(path: string): void{ this.CurrentPath$.next(path); }

  public updateRoute(route: string): void{ this.Route$.next(route); }

  public updateBreadCrumbs(crumbs: string[]): void{

    this.BreadCrumbs$.next(crumbs);
  }

  public removeBreadCrumb(crumb: string): void{
    const crumbs: string[] = this.BreadCrumbs$.value.filter(a => a !== crumb);

    this.BreadCrumbs$.next([...crumbs]);
  }

}
