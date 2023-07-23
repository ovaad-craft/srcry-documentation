import { Injectable } from '@angular/core';

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
    path: 'libraries',
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
    path: 'classes',
    subLinks: [
      {
        id: 'srcryBox',
        title: 'Srcry Box Class',
        path: 'srcry-box-class'
      },
      {
        id: 'srcryTxt',
        title: 'Srcry Text Class',
        path: 'srcry-text'
      }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  Links : Link[] = [];

  constructor() {
    this.loadLinks();
  }

  private loadLinks(): void{
    this.Links = LINKS;
  }

  public getLinks(): Link[]{
    return this.Links;
  }
}
