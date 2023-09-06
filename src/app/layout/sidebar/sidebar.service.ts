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
        path: 'box-size-library',
        breadCrumbs: ['libraries']
      },
      {
        id: 'textSize',
        title: 'Text Size Library',
        path: 'text-size-library',
        breadCrumbs: ['libraries']
      },
      {
        id: 'lineSize',
        title: 'Line Size Library',
        path: 'line-size-library',
        breadCrumbs: ['libraries']
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
            path: 'srcry-box-overview',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'baseSize',
            title: 'Base Size',
            path: 'base-size',
            breadCrumbs: ['classes', 'srcryBox']
          },{
            id: 'crushGap',
            title: 'Crush Gap',
            path: 'crus-gap',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'edgeChase',
            title: 'Edge Chase',
            path: 'edge-chase',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'chaseStop',
            title: 'Chase Stop',
            path: 'chase-stop',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'squishGrowth',
            title: 'Squish Growth',
            path: 'squish-growth',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'stretchShrink',
            title: 'Stretch Shrink',
            path: 'stretch-shrink',
            breadCrumbs: ['classes', 'srcryBox']
          },
          {
            id: 'bleed',
            title: 'Bleed',
            path: 'bleed',
            breadCrumbs: ['classes', 'srcryBox']
          }
        ],
        breadCrumbs: ['classes']
      },
      {
        id: 'srcryTxt',
        title: 'Srcry Text Class',
        subLinks: [
          {
            id: 'srcryTextOverview',
            title: 'Srcry Text Overview',
            path: 'srcry-text-overview',
            breadCrumbs: ['classes', 'srcryTxt']
          },
          {
            id: 'textSize',
            title: 'Text Size',
            path: 'text-size',
            breadCrumbs: ['classes', 'srcryTxt']
          },
          {
            id: 'textNudgeAmount',
            title: 'Text Nudge Amount',
            path: 'text-nudge-amount',
            breadCrumbs: ['classes', 'srcryTxt']
          },
          {
            id: 'kerningNudgeAmount',
            title: 'Kerning Nudge Amount',
            path: 'kerning-nudge-amount',
            breadCrumbs: ['classes', 'srcryTxt']
          },
          {
            id: 'leadingNudgeAmount',
            title: 'Leading Nudge Amount',
            path: 'leading-nudge-amount',
            breadCrumbs: ['classes', 'srcryTxt']
          }
        ],
        breadCrumbs: ['classes']
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

  private StandardPage$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public StandardPage = this.StandardPage$.asObservable();

  private BreadCrumbs$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public BreadCrumbs = this.BreadCrumbs$.asObservable();

  constructor() {
    this.loadLinks();
  }

  private loadLinks(): void{
    this.Links = LINKS;
  }

  private findLinkData(path: string, links: Link[]): Link | null{
    let linkData: Link | null = null,
        searching: boolean = true,
        i: number = 0;

    while(searching){
      if(links[i].path && links[i]. path === path){
        linkData = links[i];
        searching = false;
      }
      if(links[i].subLinks){
        const subLinkData: Link | null = this.findLinkData(path, links[i].subLinks!);
        if(subLinkData !== null){
          linkData = subLinkData;
          searching = false;
        }
      }
      if(i === links.length - 1){ searching = false; }
      else{ i++; }
    }

    return linkData;

  }

  public setInitPath(path: string): void{
    const linkData: Link | null = this.findLinkData(path, this.Links);

    if(linkData !== null){
      this.updatePath(linkData.path!);
      if(linkData.breadCrumbs){
        this.updateBreadCrumbs(linkData.breadCrumbs);
      }
    }
  }

  public getLinks(): Link[]{
    return this.Links;
  }

  public setPageType(pageType: boolean): void{
    this.StandardPage$.next(pageType);
  }

  public updatePath(path: string): void{ this.CurrentPath$.next(path); }

  public updateBreadCrumbs(crumbs: string[]): void{

    this.BreadCrumbs$.next(crumbs);
  }

  public removeBreadCrumb(crumb: string): void{
    const crumbs: string[] = this.BreadCrumbs$.value.filter(a => a !== crumb);

    this.BreadCrumbs$.next([...crumbs]);
  }

}
