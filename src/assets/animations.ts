import { trigger, state, style, animate, transition, query, group, animateChild } from '@angular/animations';

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
  
  export const PageAnimation = trigger('pageAnimation', [
    transition('* <=> *', [
      query(':enter, :leave', [style({position: 'relative', 'grid-area': 1/1/2/2, width: '100%'})]),
      group([
        query(':enter', [
          style({opacity: 0}),
        animate('500ms 800ms ease-in-out', style({opacity: 1, position: 'absolute', top: 0, left: 0})),
          animateChild()
        ], {optional: true}),
        query(':leave', [
          style({opacity: 1}),
        animate('500ms ease-in-out', style({opacity: 0})),
          animateChild()
        ], {optional: true})
      ])
    ])
  ]);